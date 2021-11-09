<template>
  <form id="kt_web_form">
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Install PHPMyAdmin
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="Web Application Name">
          <b-form-input
            name="name"
            v-model="form.name"
            placeholder="e.g: my-application / my_application"
            maxlength="40"
          ></b-form-input>
        </b-form-group>
        <div class="form-group">
          <label class="control-label">Domain Name</label>
          <b-form-radio-group
            v-model="form.domainType"
            :options="domain_options"
            name="domainType"
          ></b-form-radio-group>
        </div>
        <b-form-group v-if="form.domainType == 'custom'">
          <b-form-input
            v-model="form.domainName"
            :placeholder="getDomainExample()"
            name="customDomainName"
          ></b-form-input>
        </b-form-group>

        <b-input-group
          :append="getDomainSuffix()"
          v-if="form.domainType == 'litegix'"
        >
          <b-form-input
            v-model="form.domainName"
            name="litegixDomainName"
          ></b-form-input>
        </b-input-group>

        <fieldset v-if="form.domainType == 'custom'">
          <b-form-group>
            <b-form-checkbox
              size="lg"
              name="enableW3Version"
              v-model="form.enableW3Version"
            >
              Enable www version of this domain
            </b-form-checkbox>
          </b-form-group>

          <!-- <div class="form-group">
            <label class="control-label">DNS Integration</label>
            <b-form-select v-model="select" :options="keys"></b-form-select>
          </div> -->
        </fieldset>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Web Application Owner
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="User (Owner of this Web Application)">
          <b-form-select
            name="owner"
            size="lg"
            v-model="form.owner"
            required
            :options="system_users"
            value-field="id"
            text-field="name"
            v-on:change="onSelectOwner"
          ></b-form-select>
        </b-form-group>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Web Stack
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="PHP Version">
          <b-form-select
            name="phpVersion"
            size="lg"
            v-model="form.phpVersion"
            :options="php_versions"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="SSL/TLS Method">
          <b-form-select
            name="sslMode"
            size="lg"
            v-model="form.sslMode"
            required
            :options="web_ssl_methods"
          ></b-form-select>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox
            size="lg"
            name="enableAutoSSL"
            v-model="form.enableAutoSSL"
          >
            Enable AutoSSL
          </b-form-checkbox>
        </b-form-group>

        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Install PHPMyAdmin
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import Excluded from "@/assets/plugins/formvalidation/dist/es6/plugins/Excluded";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import {
  CREATE_PHPMYADMIN,
  STORE_PHPMYADMIN
} from "@/core/services/store/system.module";
export default {
  data() {
    return {
      system_users: [],
      php_versions: [],
      web_application_stacks: [],
      web_environments: [],
      web_ssl_methods: [],
      domain_options: [
        { text: "Use test domain", value: "litegix" },
        { text: "Use my own domain / subdomain", value: "custom" }
      ],
      form: {
        name: "",
        domainType: "custom",
        domainName: "",
        domainSuffix: "ec",
        enableW3Version: false,
        owner: null,
        publicPath: "",
        phpVersion: "php74",
        webAppStack: "nginx_apache2",
        stackMode: "production",
        sslMode: "basic",
        enableAutoSSL: false
      },
      selectedUser: null
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(CREATE_PHPMYADMIN, this.serverId).then(res => {
      console.log(res);
      this.system_users = res.data.system_users;
      this.php_versions = res.data.php_versions;
      this.web_application_stacks = res.data.web_application_stacks;
      this.web_environments = res.data.web_environments;
      this.web_ssl_methods = res.data.web_ssl_methods;
      this.form.domainSuffix = res.data.domainSuffix;
    });
    this.initForm();
  },
  methods: {
    createApplication() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(STORE_PHPMYADMIN, {
          ...this.form,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `Web application ${this.form.name} has been successfully created`
          );
        })
        .then(() => {
          this.$router.push({
            path: `/servers/${this.$parent.serverId}/webapps`
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
    },
    onSelectOwner(userId) {
      console.log("onSelectOwner", userId);
      this.selectedUser = this.system_users.find(it => it.id == userId);
    },
    getPublicPathPrefix() {
      return `/home/${this.selectedUser?.name}/webapps/${this.form.name}/`;
    },
    getDomainExample() {
      const appName = this.form.name || "litegix";
      return `e.g: ${appName}.com or subdomain.${appName}.com`;
    },
    getDomainSuffix() {
      return `.${this.form.domainSuffix}.litegix.com`;
    },
    initForm() {
      const thiz = this;
      const create_form = KTUtil.getById("kt_web_form");
      this.fv = formValidation(create_form, {
        fields: {
          name: {
            validators: {
              notEmpty: {
                message: "This name is required"
              },
              stringLength: {
                min: 5,
                message: "The name must be at least 5 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
                message:
                  "The name can consist of alphanumeric characters and underscode(_) only"
              }
            }
          },
          customDomainName: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 5,
                message: "This field must be at least 5 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_.]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) and dot(.) only"
              }
            }
          },
          litegixDomainName: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 5,
                message: "This field must be at least 5 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_.]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) and dot(.) only"
              }
            }
          },
          owner: {
            validators: {
              notEmpty: {
                message: "The owner is required"
              }
            }
          },
          publicPath: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 3,
                message: "This field must be at least 3 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) only"
              }
            }
          },
          phpVersion: {
            validators: {
              notEmpty: {
                message: "This field is required"
              }
            }
          },
          webAppStack: {
            validators: {
              notEmpty: {
                message: "This field is required"
              }
            }
          },
          stackMode: {
            validators: {
              notEmpty: {
                message: "This field is required"
              }
            }
          }
        },
        plugins: {
          trigger: new Trigger(),
          submitButton: new SubmitButton(),
          bootstrap: new Bootstrap(),
          excluded: new Excluded({
            excluded: function(field) {
              return (
                (field == "customDomainName" &&
                  thiz.form.domainType != "custom") ||
                (field == "litegixDomainName" &&
                  thiz.form.domainType != "litegix")
              );
            }
          })
        }
      });
      this.fv.on("core.form.valid", this.createApplication);
      this.fv.on("core.form.invalid", () => {});
    }
  }
};
</script>
