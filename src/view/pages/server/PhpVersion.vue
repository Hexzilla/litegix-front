<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >PHP-CLI Version</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >Your RunCloud server is equipped with multiple PHP Versions for
          multiple types of Web Applications in order to want to run PHP-CLI
          with different versions. If you use Composer, it will run using the
          PHP-CLI version you have chosen.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form-group label="Select PHP Version">
        <b-form-radio-group
          id="btn-radios-2"
          v-model="phpVersion"
          :options="options"
          buttons
          button-variant="outline-primary"
          size="lg"
          name="phpVersion"
        ></b-form-radio-group>
      </b-form-group>
      <b-button
        type="submit"
        class="btn btn-success"
        v-on:click="updateVersion"
      >
        Update PHP-CLI Version
      </b-button>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      phpVersion: "",
      options: [
        { text: "PHP 7.2", value: "7.2" },
        { text: "PHP 7.4", value: "7.4" },
        { text: "PHP 8.0", value: "8.0" }
      ]
    };
  },
  methods: {
    updateVersion(e) {
      e.preventDefault();
      console.log("updateVersion", e);
    }
  }
};
</script>
