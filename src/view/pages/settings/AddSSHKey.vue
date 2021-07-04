<template>
  <v-app>
    <!--begin::Advance Table Widget 10-->
    <div class="card card-custom gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Add SSH Key</span
          >
        </h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body py-0">
        <b-form>
          <b-form-group id="input-group-1" label="Label" label-for="label">
            <b-form-input
              id="label"
              v-model="form.canvas_name"
              placeholder="Any label for you to get recognize this public key"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Public Key" label-for="key">
            <b-form-textarea
              id="label"
              v-model="form.canvas_name"
              placeholder="sss-mfds-fdsafjdks- fdskf-d-s-fd-sa"
            ></b-form-textarea>
          </b-form-group>

          <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </div>
  </v-app>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      form: {
        label: "",
        key: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "SSH Key Vault", route: "ssh_key_vault" },
      { title: "Add SSH Key Vault" }
    ]);
  }
};
</script>
