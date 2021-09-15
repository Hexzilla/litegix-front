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
        <b-form-group label="User (The user to run this job)">
          <b-form-input
            name="username"
            v-model="form.username"
            placeholder="User to run the cron job"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Vendor Binary</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label for="command" class="control-label">Command</label>
          <textarea
            name="command"
            rows="3"
            placeholder="/path/to/script.(sh | php | js) OR if the vendor binary is empty you can rm -rf /tmp/*"
            class="form-control"
          ></textarea>
        </div>
        <h4>Pre-defined Settings</h4>
        <div class="form-group">
          <label class="control-label">Predefined Settings</label>
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <h4>Custom Settings</h4>
        <b-form-group label="Minute">
          <b-form-input name="minute" placeholder=""></b-form-input>
        </b-form-group>
        <b-form-group label="Hour">
          <b-form-input name="hure" placeholder=""></b-form-input>
        </b-form-group>
        <b-form-group label="Day of Month">
          <b-form-input name="dayofmonth" placeholder=""></b-form-input>
        </b-form-group>
        <b-form-group label="Month">
          <b-form-input name="month" placeholder=""></b-form-input>
        </b-form-group>
        <b-form-group label="Day of Week">
          <b-form-input name="dayofweek" placeholder=""></b-form-input>
        </b-form-group>
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
import Swal from "sweetalert2";

import {
  CREATE_CRON_JOB,
  STORE_CRON_JOB
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      vendor_binaries: null,
      form: {
        label: "",
        username: "",
        collation: ""
      },
      select: "",
      keys: []
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(CREATE_CRON_JOB, this.serverId).then(data => {
      console.log("~~~~~~~~~~~~~~", data);
      this.vendor_binaries = data.vendor_binaries;
    });

    const create_form = KTUtil.getById("kt_form_cronjob");
    this.fv = formValidation(create_form, {
      fields: {
        label: {
          validators: {
            notEmpty: {
              message: "Label is required"
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
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };
      const payload = {
        ...this.form,
        serverId: this.$parent.serverId
      };
      this.$store
        .dispatch(STORE_CRON_JOB, payload)
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
        text: "Cron job " + name + " has been successfully created",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      }).then(() => {
        console.log();
        this.$router.push({
          name: "server-cronjob"
        });
      });
    }
  }
};
</script>
