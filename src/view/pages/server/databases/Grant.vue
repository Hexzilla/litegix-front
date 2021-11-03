<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Grant User to Database</span
        >
      </h3>
      <p class="font-size-md mt-1">
        If you have changed your <strong>root</strong> database password, please
        update your new password inside <code>/etc/mysql/my.cnf</code> or adding
        new user won't work.
      </p>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_grantuser">
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            name="selectedUser"
            v-model="selectedUser"
            :options="users"
            value-field="id"
            text-field="name"
            required
          ></b-form-select>
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_grantuser_submit"
        >
          Grant
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
  GET_UNGRANTED_DBUSER,
  GRANT_USER
} from "@/core/services/store/database.module";

export default {
  props: ["databaseId"],
  data() {
    return {
      serverId: "",
      selectedUser: null,
      users: []
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store
      .dispatch(GET_UNGRANTED_DBUSER, {
        databaseId: this.databaseId,
        serverId: this.serverId
      })
      .then(users => {
        console.log("users", users);
        this.users = users;
      });

    const create_form = KTUtil.getById("kt_form_grantuser");
    this.fv = formValidation(create_form, {
      fields: {
        selectedUser: {
          validators: {
            notEmpty: {
              message: "The id field is required."
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
    this.fv.on("core.form.valid", this.grantUser);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    grantUser() {
      const submitButton = this.$refs["kt_form_grantuser_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(GRANT_USER, {
          dbuserId: this.selectedUser,
          serverId: this.serverId,
          databaseId: this.databaseId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `The user has been successfully granted to the database`
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
