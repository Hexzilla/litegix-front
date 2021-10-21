<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Server Details</span
          >
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <form id="kt_form_server">
          <b-form-group label="Server Name">
            <b-form-input
              name="name"
              v-model="server.name"
              placeholder=""
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Provider">
            <b-form-input
              name="provider"
              v-model="server.provider"
              placeholder=""
            ></b-form-input>
          </b-form-group>

          <button
            type="submit"
            class="btn btn-primary btn-block"
            ref="kt_form_submit"
          >
            Save
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
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import { UPDATE_SERVER_DETAIL } from "@/core/services/store/servers.module";

export default {
  name: "KTServerDetail",
  props: ["server"],
  data() {
    return {};
  },
  mounted() {
    const create_form = KTUtil.getById("kt_form_server");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "This name is required"
            }
          }
        },
        provider: {
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
    this.fv.on("core.form.valid", this.updateServer);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    updateServer() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(UPDATE_SERVER_DETAIL, {
          name: this.server.name,
          provider: this.server.provider,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(`Server has been successfully updated`);
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
