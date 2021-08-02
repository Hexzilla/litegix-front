<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Database</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >If you have changed your <strong>root</strong> database password,
          please update your new password inside
          <code>/etc/mysql/my.cnf</code> or adding new database won't
          work.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_database">
        <b-form-group label="Database Name">
          <b-form-input
            name="name"
            v-model="form.name"
            placeholder="Only alphanumeric and/or _ are allowed"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Assign Database User</label>
          <b-form-select
            size="lg"
            v-model="form.user"
            :options="databaseusers"
            value-field="_id"
            text-field="name"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label class="control-label">Collation (Optional)</label>
          <b-form-select
            size="lg"
            v-model="form.collation"
            :options="collations"
          ></b-form-select>
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add Database
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
  GET_DBUSERS,
} from "@/core/services/store/serverDB.module";

export default {
  data() {
    return {
      form: {
        name: "",
        user: "",
        collation: "",
      },
      collations: [
        { value: "utf-8", text: "utf-8" },
        { value: "utf-16", text: "utf-16" },
      ],
    };
  },
  computed: {
    ...mapGetters(["databaseusers"]),
  },
  mounted() {
    this.$store.dispatch(GET_DBUSERS, this.$parent.serverId);
    const create_form = KTUtil.getById("kt_form_database");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "Name is required",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });
    this.fv.on("core.form.valid", this.createDatabase);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    createDatabase() {
      console.log("create db");
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
        serverId: this.$parent.serverId,
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
        heightAuto: false,
      }).then(() => {
        console.log();
        this.$router.push({
          name: "server-database",
        });
      });
    },
  },
};
</script>