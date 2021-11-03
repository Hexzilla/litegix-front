<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Update password for system user {{ systemUser.name }}</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_changepassword">
        <b-form-group label="Password">
          <b-input-group>
            <b-form-input
              type="password"
              name="password"
              v-model="form.password"
              placeholder=""
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group label="Verify Password">
          <b-form-input
            type="password"
            name="cpassword"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_server_submit"
        >
          Change Password
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
  GET_SYSTEM_USER,
  CHANGE_SYSTEM_USER_PASSWORD
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      userId: "",
      systemUser: {},
      form: {
        password: ""
      }
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.userId = this.$route.params.userId;
    console.log("userId", this.userId);
    this.$store
      .dispatch(GET_SYSTEM_USER, {
        serverId: this.serverId,
        userId: this.userId
      })
      .then(systemUser => {
        console.log("systemUser", systemUser);
        this.systemUser = systemUser;
      });

    const create_form = KTUtil.getById("kt_form_changepassword");
    this.fv = formValidation(create_form, {
      fields: {
        password: {
          validators: {
            notEmpty: {
              message: "The password is required"
            },
            stringLength: {
              min: 8,
              message: "The password must be at least 8 characters"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return create_form.querySelector('[name="password"]').value;
              },
              message: "The password and its confirm are not the same"
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
    this.fv.on("core.form.valid", this.change_password);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    change_password() {
      const submitButton = this.$refs["kt_form_server_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      const payload = {
        password: this.form.password,
        serverId: this.serverId,
        userId: this.userId
      };
      this.$store
        .dispatch(CHANGE_SYSTEM_USER_PASSWORD, payload)
        .then(() => {
          return showSuccessMsgbox(
            `Successfully changed password for ${this.systemUser.name}`
          );
        })
        .then(() => {
          this.$router.push({
            name: "server-system"
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
