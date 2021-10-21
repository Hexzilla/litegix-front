<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Change IP Address
          </span>
          <div class="text-muted mt-3 font-size-sm">
            <p>
              If your server's IP Address has been changed manually or
              automatically, we are not able to serve your server with the new
              IP Address due to technical limitation. If you wanted to change
              your IP Address, fill in the new IP Address for this server and
              wait for the next instruction.
            </p>
          </div>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <form id="kt_form_address">
          <b-form-group label="IP Address">
            <b-form-input
              name="address"
              v-model="server.address"
              placeholder="Your server's new IP Address"
            ></b-form-input
          ></b-form-group>

          <button
            type="submit"
            class="btn btn-primary btn-block"
            ref="kt_address_submit"
          >
            Update IP Address
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";
import {
  showConfirmMsgbox,
  showSuccessMsgbox,
  catchError
} from "@/view/shared/msgbox";
import { UPDATE_SERVER_ADDRESS } from "@/core/services/store/servers.module";

export default {
  name: "KTChangeIPAddress",
  props: ["server"],
  data() {
    return {};
  },
  mounted() {
    const create_form = KTUtil.getById("kt_form_address");
    console.log("create_form", create_form);
    this.fv = formValidation(create_form, {
      fields: {
        address: {
          validators: {
            ip: {
              ipv4: true,
              message: "The value is not valid IP address"
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
    this.fv.on("core.form.valid", this.updateServer);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    async updateServer() {
      const result = await showConfirmMsgbox(
        "Do you want to update server IP address?"
      );
      if (!result.isConfirmed) {
        return;
      }

      // set spinner to submit button
      const submitButton = this.$refs["kt_address_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(UPDATE_SERVER_ADDRESS, {
          address: this.server.address,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `Server address has been successfully changed`
          );
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
