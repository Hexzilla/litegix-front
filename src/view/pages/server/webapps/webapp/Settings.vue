<template>
  <div>
    <KTCard ref="publicPath" title="Web Application Settings">
      <template v-slot:toolbar>
        <b-link @click="saveSettings($event)">
          <a class="btn btn-primary font-weight-bolder font-size-sm">
            Save Settings
          </a>
        </b-link>
      </template>
      <template v-slot:body>
        <p class="font-size-md mt-1">
          You must place your Deployment Key into your git repository. You can
          get your deployment key in Deployment Key section.
        </p>
        <b-form-group label="PHP Version">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="Public Path">
      <template v-slot:body>
        <b-form-group label="Public Path">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="SSL Settings">
      <template v-slot:body>
        <b-form-group label="SSL/TLS Method">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="Web Application Stack">
      <template v-slot:body>
        <b-form-group label="Web Application Stack">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Environment">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Web Application Type">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="NGINX Settings">
      <template v-slot:body>
        <b-form-group label="Clickjacking Protection">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="FPM Settings">
      <template v-slot:body>
        <b-form-group label="Process Manager">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
      </template>
    </KTCard>

    <KTCard ref="publicPath" title="PHP Settings">
      <template v-slot:body>
        <b-form-group label="open_basedir">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="date.timezone">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="disable_functions">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="max_execution_time">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="max_input_time">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="max_input_vars">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="memory_limit">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="post_max_size">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="upload_max_filesize">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="session.gc_maxlifetime">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="allow_url_fopen">
          <b-form-select
            v-model="phpVersion"
            :options="phpVersionOptions"
          ></b-form-select>
        </b-form-group>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Save Settings
        </button>
      </template>
    </KTCard>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTCard from "@/view/content/Card.vue";
import { makeSuccessToast, catchError } from "@/view/shared/msgbox";
import {
  GET_PHP_VERSION,
  UPDATE_PHP_VERSION
} from "@/core/services/store/system.module";

export default {
  components: {
    KTCard
  },
  data() {
    return {
      serverId: "",
      selectedVersion: "7.2",
      providers: ["Github", "GitLab", "Bitbucket", "Custom Git"],
      phpVersion: "7.2",
      phpVersionOptions: [
        {
          value: "7.2",
          text: "PHP 7.2"
        },
        {
          value: "7.3",
          text: "PHP 7.3"
        },
        {
          value: "7.3",
          text: "PHP 7.3"
        },
        {
          value: "8.0",
          text: "PHP 8.0"
        }
      ]
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_PHP_VERSION, this.serverId).then(res => {
      console.log("PHPVersion", res);
      this.options = res.data.avaliable;
      this.selectedVersion = res.data.phpVersion;
    });
  },
  methods: {
    updateVersion(e) {
      e.preventDefault();
      console.log("updateVersion", this.selectedVersion);
      const payload = {
        serverId: this.serverId,
        phpVersion: this.selectedVersion
      };
      this.$store
        .dispatch(UPDATE_PHP_VERSION, payload)
        .then(phpVersion => {
          console.log("PHP version is updated", phpVersion);
          makeSuccessToast(this, "PHP version has been updated.");
        })
        .catch(catchError);
    }
  }
};
</script>
