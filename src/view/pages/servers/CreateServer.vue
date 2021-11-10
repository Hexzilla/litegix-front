<template>
  <div class="card card-custom max-w-sm-800px mx-auto">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Connect Server
        </h3>
      </div>
    </div>
    <div class="card-body">
      <form class="form mt-5" id="kt_create_form">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Web Server:">
              <b-form-select
                id="web-sever"
                :options="webservers"
                v-model="server.webserver"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Server Name:">
              <b-form-input
                placeholder="Enter server name"
                name="name"
                ref="name"
                v-model="server.name"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="IP Address:">
              <b-form-input
                placeholder="IP Address"
                name="address"
                ref="address"
                v-model="server.address"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="PHP Version:">
              <b-form-select
                id="php-version"
                v-model="server.phpVersion"
                :options="php_versions"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
            <b-form-group label="Database:">
              <b-form-select
                id="database"
                v-model="server.database"
                :options="databases"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>

        <div class="d-flex justify-content-center border-top mt-10 pt-10">
          <button
            type="button"
            class="btn btn-primary text-uppercase px-15 py-2 my-3 mr-3"
            @click="createServer()"
            ref="kt_save_changes"
          >
            Create this server
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import KTUtil from "@/assets/js/components/util";
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import Swal from "sweetalert2";

import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  CREATE_SERVER,
  STORE_SERVER
} from "@/core/services/store/servers.module";

export default {
  name: "Account",
  data() {
    return {
      webservers: [],
      php_versions: [],
      databases: [],
      server: {
        name: "",
        address: "",
        provider: "",
        webserver: "nginx",
        phpVersion: "php7.4",
        database: "mysql"
      }
    };
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo", "currentUserAccountInfo"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Create" }
    ]);

    this.$store.dispatch(CREATE_SERVER).then(res => {
      console.log("create_server", res);
      this.webservers = res.data.webservers;
      this.php_versions = res.data.php_versions;
      this.databases = res.data.databases;
    });

    const default_validators = {
      validators: {
        notEmpty: { message: "This field is required" }
      }
    };
    const profile_form = KTUtil.getById("kt_create_form");
    this.fv = formValidation(profile_form, {
      fields: {
        name: default_validators,
        email: default_validators,
        address: {
          validators: {
            ip: {
              message: "The value is not valid IP address"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        bootstrap: new Bootstrap(),
        submitButton: new SubmitButton()
      }
    });
  },
  methods: {
    async createServer() {
      this.fv.validate();

      this.fv.on("core.form.valid", async () => {
        try {
          const submitButton = this.$refs["kt_save_changes"];
          submitButton.classList.add(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
          const removeSpinner = () => {
            submitButton.classList.remove(
              "spinner",
              "spinner-light",
              "spinner-right"
            );
          };

          const result = await this.$store.dispatch(STORE_SERVER, this.server);
          removeSpinner();

          if (result.success) {
            await this.showMessageBox(
              "success",
              "Your Server has been successfully created"
            );
            this.$router.push({
              path: `/servers/${result.data.id}/config`
            });
          } else {
            await this.showMessageBox("error", result.errors?.message);
          }
        } catch (e) {
          await this.showMessageBox("error", "Failed to create server");
        }
      });
    },
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        variant: variant,
        solid: true
      });
    },
    async showMessageBox(icon, text) {
      await Swal.fire({
        title: "",
        text: text,
        icon: icon,
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    }
  }
};
</script>
