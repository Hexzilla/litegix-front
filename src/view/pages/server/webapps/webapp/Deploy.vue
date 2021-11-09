<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Deploy Web Application
        </span>
      </h3>
      <p class="font-size-md mt-1">
        You must place your Deployment Key into your git repository. You can get
        your deployment key in Deployment Key section.
      </p>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form-group label="Select Provider">
        <b-form-radio-group
          id="btn-radios-2"
          v-model="provider"
          :options="providers"
          buttons
          button-variant="outline-primary"
          size="lg"
        ></b-form-radio-group>
      </b-form-group>

      <!--Custom-->
      <div v-if="provider == 'custom'">
        <b-form-group label="Git User:">
          <b-form-input
            placeholder="Enter your name"
            name="gituser"
            v-model="form.gituser"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Git Host:">
          <b-form-input
            placeholder="Enter your name"
            name="githost"
            v-model="form.githost"
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group label="Repository:">
        <b-form-input
          :placeholder="getRepositoryPlaceholder()"
          name="repository"
          v-model="form.repository"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Branch:">
        <b-form-input
          placeholder="Enter your name"
          name="branch"
          v-model="form.branch"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-16"
        label="This command will be running inside your server to deploy your Web Application"
      >
        <b-form-input readonly :value="getCloneCommand()"></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        class="btn btn-info font-weight-bolder"
        v-on:click="deployApplication"
      >
        Deploy Web Application
      </b-button>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import { makeSuccessToast, catchError } from "@/view/shared/msgbox";
import {
  GET_PHP_VERSION,
  UPDATE_PHP_VERSION
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "git",
      selectedVersion: "7.2",
      provider: "github",
      providers: [
        {
          value: "github",
          text: "Github"
        },
        {
          value: "gitlab",
          text: "GitLab"
        },
        {
          value: "bitbucket",
          text: "Bitbucket"
        },
        {
          value: "custom",
          text: "Custom Git"
        }
      ],
      form: {
        gituser: "git",
        githost: "",
        repository: "",
        branch: "main"
      }
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
    getRepositoryPlaceholder() {
      return `${this.provider}-username/repository-name`;
    },
    getCloneCommand() {
      return `git clone --depth 1 --no-single-branch git@${this.provider}.com:${this.form.repository}.git -b ${this.form.branch}`;
    },
    deployApplication(e) {
      e.preventDefault();
      console.log("deployApplication", this.selectedVersion);
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
