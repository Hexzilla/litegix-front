<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Notification Channel</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form-group label="Service">
        <b-form-select v-model="service" :options="services"></b-form-select>
      </b-form-group>

      <form class="form" id="kt_form_email">
        <div v-if="service == 'Email'">
          <b-form-group label="Notification Name">
            <b-form-input
              name="name"
              v-model="email.name"
              placeholder="Name for this notification"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email">
            <b-form-input
              name="address"
              v-model="email.address"
              placeholder="Email address to send the notification"
            ></b-form-input>
          </b-form-group>
        </div>
      </form>

      <form class="form" id="kt_form_slack">
        <div v-if="service == 'Slack'">
          <label class="mb-6">
            To register a Slack Channel, please create a new Slack Incoming
            WebHooks to get the WebHook URL.
          </label>
          <b-form-group label="Notification Name">
            <b-form-input
              name="name"
              v-model="slack.name"
              placeholder="Name for this notification"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Slack">
            <b-form-input
              name="address"
              v-model="slack.address"
              placeholder="Slack notification WebHook"
            ></b-form-input>
          </b-form-group>
        </div>
      </form>

      <form class="form" id="kt_form_telegram">
        <div v-if="service == 'Telegram'">
          <b-form-group
            label="Please go to Telegram and start talking with @LitegixBot. To authenticate your chat, send this command to Litegix Notification Bot"
          >
            <b-form-input
              name="authenticate"
              value="/authenticate kZKWOM4V5mJE"
              disabled
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Notification Name">
            <b-form-input
              name="name"
              v-model="telegram.name"
              placeholder="Name for this notification"
            ></b-form-input>
          </b-form-group>
        </div>
      </form>

      <button
        class="btn btn-primary btn-block"
        ref="kt_form_submit"
        @click="submit($event)"
      >
        Add Channel
      </button>
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
import { ADD_CHANNEL } from "@/core/services/store/account.module";

export default {
  data() {
    return {
      services: ["Email", "Slack", "Telegram"],
      service: "Email",
      email: {
        name: "",
        address: ""
      },
      slack: {
        name: "",
        address: ""
      },
      telegram: {
        name: ""
      }
    };
  },
  computed: {
    ...mapGetters(["databaseusers"])
  },
  mounted() {
    this.emailForm = formValidation(KTUtil.getById("kt_form_email"), {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
            }
          }
        },
        address: {
          validators: {
            notEmpty: {
              message: "This email address is required"
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
    this.emailForm.on("core.form.valid", this.addChannel);
    this.emailForm.on("core.form.invalid", () => {});

    this.slackForm = formValidation(KTUtil.getById("kt_form_slack"), {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
            }
          }
        },
        address: {
          validators: {
            notEmpty: {
              message: "This email address is required"
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
    this.slackForm.on("core.form.valid", this.addChannel);

    this.telegramForm = formValidation(KTUtil.getById("kt_form_telegram"), {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
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
    this.telegramForm.on("core.form.valid", this.addChannel);
  },
  methods: {
    showMessageBox(icon, text) {
      return Swal.fire({
        title: "",
        text: text,
        icon: icon,
        heightAuto: false
      });
    },
    submit(e) {
      e.preventDefault();
      if (this.service == "Email") {
        this.emailForm.validate();
      } else if (this.service == "Slack") {
        this.slackForm.validate();
      } else if (this.service == "Telegram") {
        this.telegramForm.validate();
      }
    },
    addChannel() {
      console.log("addChannel");
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      let payload = this.email;
      if (this.service == "Slack") {
        payload = this.slack;
      } else if (this.service == "Telegram") {
        payload = this.telegram;
      }

      this.$store
        .dispatch(ADD_CHANNEL, {
          ...payload,
          service: this.service
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return this.showMessageBox(
            "success",
            "Channel " + payload.name + " has been successfully created"
          );
        })
        .then(() => {
          this.$router.push({
            path: `/settings/notification`
          });
        })
        .catch(err => {
          const message =
            err.response?.data?.errors?.message ||
            err.message ||
            "Failed to add channel!";
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
