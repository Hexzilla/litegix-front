<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Grant User to Database</span
        >
        <span
          class="text-muted mt-3 font-weight-bold font-size-sm"
          data-nsfw-filter-status="swf"
          >data-nsfw-filter-status="swf">If you have changed your
          <strong>root</strong> database password, please update your new
          password inside <code>/etc/mysql/my.cnf</code> or grant user to
          database won't work.</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form_grantuser">
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            v-model="dbuserId"
            :options="ungrantedusers"
            value-field="_id"
            text-field="name"
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
import { mapGetters } from "vuex";

import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";

import Swal from "sweetalert2";
import {
  GET_UNGRANTED_DBUSER,
  GRANT_USER,
} from "@/core/services/store/database.module";

export default {
  props: ["databaseId"],
  data() {
    return {
      dbuserId: "",
    };
  },
  mounted() {
    this.$store.dispatch(GET_UNGRANTED_DBUSER, {
      databaseId: this.databaseId,
      serverId: this.$parent.serverId,
    });
    const create_form = KTUtil.getById("kt_form_grantuser");
    this.fv = formValidation(create_form, {
      fields: {
        dbuserId: {
          validators: {
            notEmpty: {
              message: "The id field is required.",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });
    this.fv.on("core.form.valid", this.change_password);
    this.fv.on("core.form.invalid", () => {});
  },
  computed: {
    ...mapGetters(["databaseuser", "ungrantedusers"]),
  },
  methods: {
    change_password() {
      const submitButton = this.$refs["kt_form_grantuser_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };
      const payload = {
        dbuserId: this.dbuserId,
        serverId: this.$parent.serverId,
        databaseId: this.databaseId,
      };
      this.$store
        .dispatch(GRANT_USER, payload)
        .then(() => {
          removeSpinner();
          this.onCreateSuccess();
        })
        .catch(() => {
          removeSpinner();
        });
    },
    onCreateSuccess() {
      Swal.fire({
        title: "",
        text: "Successfully grant user to database",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      }).then(() => {
        console.log();
        this.$router.push({
          name: "server-database",
        });
      });
    },
  },
};
</script>