<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Create System User</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >This will create a new user for your server. This user will be able
          to add new Web Applications. Please make sure the choosen username is
          not used by any other service(nginx,apsche,mysql, etc). Choose a real
          username like john, bob or harley. Take note that
          <strong
            >we do not store or capture your password by any means.</strong
          ></span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_database">
        <b-form-group label="User Name">
          <b-form-input
            name="name"
            v-model="form.name"
            placeholder="Only alphanumeric and/or _ are allowed"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password">
          <b-form-input
            name="password"
            type="password"
            v-model="form.password"
            placeholder=""
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Verify Password">
          <b-form-input
            name="verify_password"
            type="password"
            v-model="form.verify_password"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add System User
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";

import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import { CREATE_SYSTEM_USER } from "@/core/services/store/system.module";

export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        verify_password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["databaseusers"])
  },
  mounted() {
    const create_form = KTUtil.getById("kt_form_database");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "Name is required"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });
    this.fv.on("core.form.valid", this.createSystemUser);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    showMessageBox(icon, text) {
      return Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    },
    createSystemUser() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(CREATE_SYSTEM_USER, {
          name: this.form.name,
          password: this.form.password,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return this.showMessageBox(
            "success",
            "System user " + this.form.name + " has been successfully created"
          );
        })
        .then(() => {
          this.$router.push({
            path: `/server/${this.$parent.serverId}/systemuser`
          });
        })
        .catch(err => {
          const message =
            err.data?.errors?.message ||
            err.message ||
            "Failed to add system user!";
          return this.showMessageBox("error", message);
        })
        .finally(() => {
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        });
    }
  }
};
</script>
