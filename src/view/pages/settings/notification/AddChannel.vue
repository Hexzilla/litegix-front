<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          {{ `${this.editMode ? "Edit" : "Add"} Notification Channel` }}
        </span>
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form-group label="Service">
        <b-form-select
          v-model="service"
          :options="services"
          :disabled="editMode"
        ></b-form-select>
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
        {{ this.editMode ? "Update Channel" : "Add Channel" }}
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
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import {
  GET_CHANNEL,
  ADD_CHANNEL,
  UPDATE_CHANNEL
} from "@/core/services/store/account.module";

export default {
  data() {
    return {
      channelId: null,
      channel: null,
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
      },
      editMode: false
    };
  },
  mounted() {
    this.channelId = this.$route.params.channelId;
    console.log("channelId", this.channelId);
    if (this.channelId) {
      this.editMode = true;
      this.$store.dispatch(GET_CHANNEL, this.channelId).then(channel => {
        console.log("this.channel", channel);
        this.channel = channel;
        this.service = channel.service;
        this.email = { ...this.channel };
        this.slack = { ...this.channel };
        this.telegram = { ...this.channel };
      });
    }

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
            },
            emailAddress: {
              message: "The value is not a valid email address"
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
              message: "This slack is required"
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
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      let payload = this.email;
      if (this.service == "Slack") {
        payload = this.slack;
      } else if (this.service == "Telegram") {
        payload = this.telegram;
      }

      const action = this.editMode ? UPDATE_CHANNEL : ADD_CHANNEL;
      this.$store
        .dispatch(action, {
          ...payload,
          id: this.channelId,
          service: this.service
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          if (this.editMode) {
            return showSuccessMsgbox(`Channel has been successfully updated`);
          } else {
            return showSuccessMsgbox(
              `Channel ${payload.name} has been successfully added`
            );
          }
        })
        .then(() => {
          this.$router.push({
            path: `/settings/notification`
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
