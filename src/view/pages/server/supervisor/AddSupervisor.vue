<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Supervisor Job</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_supervisor_job">
        <b-form-group label="Job Name">
          <b-form-input
            name="name"
            placeholder="Only letters, numbers, underscores and dashes are allowed"
            v-model="form.name"
          ></b-form-input>
        </b-form-group>
        <!-- <b-form-group label="Username (The system user to run this job)"
          ><b-form-input
            name="username"
            placeholder="If you specify non-existent user, your supervisor will fail to start"
          ></b-form-input
        ></b-form-group> -->

        <div class="form-group">
          <label class="control-label">
            User (The system user to run this job)
          </label>
          <b-form-select
            name="user"
            size="lg"
            v-model="form.user"
            required
            :options="system_users"
            value-field="id"
            text-field="name"
          ></b-form-select>
        </div>

        <b-form-group label="Numprocs">
          <b-form-input
            type="number"
            name="numprocs"
            placeholder="Be careful! High numprocs will crash your server"
            required
            v-model="form.numprocs"
          ></b-form-input
        ></b-form-group>

        <div class="form-group">
          <label class="control-label">Vendor Binary</label>
          <b-form-select
            size="lg"
            v-model="form.vendorBinary"
            required
            :options="vendor_binaries"
          ></b-form-select>
        </div>

        <b-form-group label="Directory (Optional)"
          ><b-form-input
            name="directory"
            placeholder="/var/www/testing/artisan queue:work --daemon --tries=3"
            required
            v-model="form.directory"
          ></b-form-input
        ></b-form-group>
        <b-form-group label="Command"
          ><b-form-input
            name="command"
            placeholder="/path/to/folder"
            v-model="form.command"
          ></b-form-input
        ></b-form-group>

        <div class="d-flex mt-10 mb-10">
          <b-form-group label="" class="w-250px">
            <b-form-checkbox
              size="lg"
              name="autoRestart"
              v-model="form.autoRestart"
            >
              Auto Restart
            </b-form-checkbox>
          </b-form-group>
          <b-form-group label="" class="w-250px">
            <b-form-checkbox
              size="lg"
              name="autoStart"
              v-model="form.autoStart"
            >
              Auto Start
            </b-form-checkbox>
          </b-form-group>
        </div>

        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add Supervisor Job
        </button>
      </b-form>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import {
  CREATE_SUPERVISOR_JOB,
  STORE_SUPERVISOR_JOB
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      vendor_binaries: [],
      system_users: [],
      form: {
        name: "",
        user: "",
        numprocs: 1,
        vendorBinary: "bash",
        directory: "",
        command: "",
        autoRestart: false,
        autoStart: false
      }
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(CREATE_SUPERVISOR_JOB, this.serverId).then(data => {
      this.vendor_binaries = data.vendor_binaries;
      this.system_users = data.system_users;
      console.log(data);
    });

    const create_form = KTUtil.getById("kt_form_supervisor_job");
    console.log("create_form", create_form);
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        user: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        numprocs: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        command: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        vendorBinary: {
          validators: {
            notEmpty: {
              message: "This field is required"
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
    this.fv.on("core.form.valid", this.submit);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    submit() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      const payload = {
        ...this.form,
        serverId: this.$parent.serverId
      };
      console.log("supervisor.payload", payload);
      this.$store
        .dispatch(STORE_SUPERVISOR_JOB, payload)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            "Supervisor Job " + payload.name + " has been successfully added"
          );
        })
        .then(() => {
          this.$router.push({
            path: `/servers/${this.$parent.serverId}/supervisor`
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
