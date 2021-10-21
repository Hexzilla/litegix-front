<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Add SSH Key</span>
      </h3>
    </div>
    <div class="card-body py-0 pb-10">
      <b-form id="kt_form_sshkey">
        <b-form-group label="Label">
          <b-form-input
            name="label"
            v-model="label"
            placeholder="Any label for you to recognize this public key"
          ></b-form-input>
        </b-form-group>
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            v-model="system_user"
            :options="systemUsers"
            value-field="id"
            text-field="name"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label class="control-label">Public Key</label>
          <b-form-textarea
            name="public_key"
            v-model="public_key"
            placeholder="sss-rsa|ecdsa-sha2-nistp(256|384|512)|ssh-ed25519 xxx..."
            rows="6"
            max-rows="10"
          ></b-form-textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add
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
import { catchError, showSuccessMsgbox } from "@/view/shared/msgbox";
import {
  GET_SYSTEM_USERS,
  CREATE_SSH_KEY
} from "@/core/services/store/system.module";

export default {
  data() {
    return {
      serverId: "",
      systemUsers: [],
      label: "",
      system_user: "",
      public_key: ""
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_SYSTEM_USERS, this.serverId).then(systemUsers => {
      this.systemUsers = systemUsers;
      console.log("systemUsers", this.systemUsers);
    });

    const create_form = KTUtil.getById("kt_form_sshkey");
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
    this.fv.on("core.form.valid", this.addKey);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    addKey() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(CREATE_SSH_KEY, {
          label: this.label,
          userId: this.system_user,
          publicKey: this.public_key,
          serverId: this.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `SSH Key ${this.label} has been successfully added`
          );
        })
        .then(() => {
          this.$router.push({
            path: `/servers/${this.serverId}/sshkey`
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
