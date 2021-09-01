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
import {
  CREATE_DATABASE,
  GET_DBUSERS
} from "@/core/services/store/database.module";

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
    this.$store.dispatch(GET_DBUSERS, this.$parent.serverId);
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
    this.fv.on("core.form.valid", this.createDatabase);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    createDatabase() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };
      const payload = {
        name: this.form.name,
        user: this.form.user,
        collation: this.form.collation,
        serverId: this.$parent.serverId
      };
      this.$store
        .dispatch(CREATE_DATABASE, payload)
        .then(() => {
          removeSpinner();
          this.onCreateSuccess(payload.name);
        })
        .catch(() => {
          removeSpinner();
        });
    },
    onCreateSuccess(name) {
      Swal.fire({
        title: "",
        text: "Database " + name + " has been successfully created",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      }).then(() => {
        console.log();
        this.$router.push({
          name: "server-database"
        });
      });
    }
  }
};
</script>
