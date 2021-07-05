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
      <b-form>
        <b-form-group
          label="Select PHP Version"
        >
          <b-form-radio-group
            id="btn-radios-2"
            v-model="phpversion"
            :options="options"
            buttons
            button-variant="outline-primary"
            size="lg"
            name="phpversion"
          ></b-form-radio-group>
        </b-form-group>
        <b-button type="submit" class="btn btn-success">
          Update PHP-CLI Version
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      phpversion: "",
      options: [
        { text: "PHP 7.2", value: "7.2" },
        { text: "PHP 7.4", value: "7.4" },
        { text: "PHP 8.0", value: "8.0"},
      ],
    };
  },
};
</script>