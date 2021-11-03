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
            name="userId"
            v-model="form.userId"
            :options="databaseUsers"
            value-field="id"
            text-field="name"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label class="control-label">Collation (Optional)</label>
          <b-form-select
            size="lg"
            v-model="form.collation"
            :options="database_encodings"
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
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import {
  CREATE_DATABASE,
  STORE_DATABASE
} from "@/core/services/store/database.module";

export default {
  data() {
    return {
      databaseUsers: [],
      form: {
        name: "",
        userId: "",
        collation: ""
      },
      database_encodings: []
    };
  },
  mounted() {
    this.$store.dispatch(CREATE_DATABASE, this.$parent.serverId).then(res => {
      console.log("create_database", res);
      this.databaseUsers = res.data.db_users;
      this.database_encodings = res.data.database_encodings;
    });

    const create_form = KTUtil.getById("kt_form_database");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
            },
            stringLength: {
              min: 5,
              message: "The name must be at least 5 characters"
            },
            regexp: {
              regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
              message:
                "The name can consist of alphanumeric characters and underscode(_) only"
            }
          }
        },
        userId: {
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
    createDatabase() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(STORE_DATABASE, {
          name: this.form.name,
          userId: this.form.userId,
          collation: this.form.collation,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `Database ${this.form.name} has been successfully created`
          );
        })
        .then(() => {
          this.$router.push({
            path: `/servers/${this.$parent.serverId}/database`
          });
        })
        .catch(catchError)
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
