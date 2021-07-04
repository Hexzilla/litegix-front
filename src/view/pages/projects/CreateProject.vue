<template>
  <div>
    <b-alert
      show
      variant="light"
      class="alert alert-custom alert-light alert-shadow fade show gutter-b"
    >
      <div class="alert-icon">
        <span class="svg-icon svg-icon-lg">
          <inline-svg src="/media/svg/icons/Code/Warning-2.svg" />
        </span>
      </div>
      <div class="alert-text">
        Clicking the CREATE button will <b>immediately</b> convert your Web
        Application to Atomic Deployment Web Application.
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <b-card title="Add New Atomic Deployment Project">
          <b-card-text>
            You can't convert Atomic Deployment Web Application back to regular
            Git Deployment after you run this. Please read the
            <b-link href="/"> Atomic Git Deployment Docs</b-link> for more info.
          </b-card-text>

          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-2"
              label="Project Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Auto deploy:"
              label-for="checkboxes-4"
            >
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me"
                  >Auto deploy on Git push (You need to install Webhook URL
                  inside your Git repository)</b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Web Application:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button class="ml-2" type="reset" variant="danger">
              Reset
            </b-button>
          </b-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Projects", route: "Projects" },
      { title: "Create Project" }
    ]);
  }
};
</script>
