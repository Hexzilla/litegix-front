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
            required
            placeholder="Only alphanumeric and/or _ are allowed"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Assign Database User</label>
          <b-form-select
            size="lg"
            name="user"
            v-model="form.user"
            :options="databaseUsers"
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
import Swal from "sweetalert2";
import {
  CREATE_DATABASE,
  GET_DBUSERS
} from "@/core/services/store/database.module";

export default {
  data() {
    return {
      databaseUsers: [],
      form: {
        name: "",
        user: "",
        collation: ""
      },
      collations: [
        { value: "utf-8", text: "utf-8" },
        { value: "utf-16", text: "utf-16" }
      ]
    };
  },
  mounted() {
    this.$store
      .dispatch(GET_DBUSERS, this.$parent.serverId)
      .then(databaseUsers => {
        this.databaseUsers = databaseUsers;
      });

    const create_form = KTUtil.getById("kt_form_database");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
            }
          }
        },
        user: {
          validators: {
            notEmpty: {
              message: "This user is required"
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
    showMessageBox(icon, text) {
      return Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    },
    createDatabase() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(CREATE_DATABASE, {
          name: this.form.name,
          user: this.form.user,
          collation: this.form.collation,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return this.showMessageBox(
            "success",
            "Database " + this.form.name + " has been successfully created"
          );
        })
        .then(() => {
          this.$router.push({
            path: `/server/${this.$parent.serverId}/database`
          });
        })
        .catch(err => {
          const message =
            err.data?.errors?.message ||
            err.message ||
            "Failed to create database!";
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
