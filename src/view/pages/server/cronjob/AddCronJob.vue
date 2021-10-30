<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Cron Job</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_cronjob">
        <b-form-group label="Job Label">
          <b-form-input
            name="label"
            v-model="form.label"
            placeholder="Label for this cron job"
          ></b-form-input>
        </b-form-group>
        <!-- <b-form-group label="User (The user to run this job)">
          <b-form-input
            name="user"
            v-model="form.user"
            placeholder="User to run the cron job"
          ></b-form-input>
        </b-form-group> -->
        <div class="form-group">
          <label class="control-label">User (The user to run this job)</label>
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

        <div class="form-group">
          <label class="control-label">Vendor Binary</label>
          <b-form-select
            size="lg"
            v-model="form.vendor_binary"
            required
            :options="vendor_binaries"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label for="command" class="control-label">Command</label>
          <textarea
            name="command"
            v-model="form.command"
            rows="3"
            placeholder="/path/to/script.(sh | php | js) OR if the vendor binary is empty you can rm -rf /tmp/*"
            class="form-control"
          ></textarea>
        </div>
        <!-- <h4>Pre-defined Settings</h4> -->
        <div class="form-group">
          <label class="control-label">Predefined Settings</label>
          <b-form-select
            size="lg"
            v-model="form.predef_setting"
            :options="predefined_settings"
          ></b-form-select>
        </div>

        <!--Custom Settings-->
        <!-- <h4>Custom Settings</h4>
        <b-form-group label="Minute">
          <b-form-input
            name="minute"
            placeholder="*"
            v-model="form.custom_settings.minute"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Hour">
          <b-form-input
            name="hour"
            placeholder="*"
            v-model="form.custom_settings.hour"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Day of Month">
          <b-form-input
            name="dayOfMonth"
            placeholder="*"
            v-model="form.custom_settings.dayOfMonth"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Month">
          <b-form-input
            name="month"
            placeholder="*"
            v-model="form.custom_settings.month"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Day of Week">
          <b-form-input
            name="dayOfWeek"
            placeholder="*"
            v-model="form.custom_settings.dayOfWeek"
          ></b-form-input>
        </b-form-group> -->
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Create cron job
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
  CREATE_CRON_JOB,
  STORE_CRON_JOB
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      vendor_binaries: [],
      predefined_settings: [],
      system_users: [],
      form: {
        label: "",
        user: "",
        vendor_binary: "bash",
        command: "",
        predef_setting: "e1",
        custom_settings: {
          minute: "",
          hour: "",
          dayOfMonth: "",
          month: "",
          dayOfWeek: ""
        }
      }
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(CREATE_CRON_JOB, this.serverId).then(data => {
      this.vendor_binaries = data.vendor_binaries;
      this.predefined_settings = data.predefined_settings;
      this.system_users = data.system_users;
      console.log(data);
    });

    const create_form = KTUtil.getById("kt_form_cronjob");
    console.log("create_form", create_form);
    this.fv = formValidation(create_form, {
      fields: {
        label: {
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
        vendor_binary: {
          validators: {
            notEmpty: {
              message: "This field is required"
            }
          }
        },
        predef_setting: {
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
      console.log("payload", payload);
      this.$store
        .dispatch(STORE_CRON_JOB, payload)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            "Cron Job " + payload.label + " has been successfully added"
          );
        })
        .then(() => {
          this.$router.push({
            path: `/servers/${this.$parent.serverId}/cronjob`
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
