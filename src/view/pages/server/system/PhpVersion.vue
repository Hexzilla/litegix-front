<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >PHP-CLI Version</span
        >
      </h3>
      <p class="font-size-md mt-1">
        Your Litegix server is equipped with multiple PHP Versions for multiple
        types of Web Applications in order to want to run PHP-CLI with different
        versions. If you use Composer, it will run using the PHP-CLI version you
        have chosen.
      </p>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form-group label="Select PHP Version">
        <b-form-radio-group
          id="btn-radios-2"
          v-model="selectedVersion"
          :options="options"
          buttons
          button-variant="outline-primary"
          size="lg"
        ></b-form-radio-group>
      </b-form-group>
      <b-button
        type="submit"
        class="btn btn-info font-weight-bolder"
        v-on:click="updateVersion"
      >
        Update PHP-CLI Version
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
      serverId: "",
      selectedVersion: "7.2",
      options: []
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
