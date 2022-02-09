<template>
  <form id="kt_web_form">
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Add Wordpress Web Application
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="Web Application Name">
          <b-form-input
            name="name"
            v-model="data.name"
            placeholder="e.g: my-application / my_application"
            maxlength="40"
          ></b-form-input>
        </b-form-group>
        <div class="form-group">
          <label class="control-label">Domain Name</label>
          <b-form-radio-group
            v-model="data.domain.selection"
            :options="domain_options"
            name="domain_selection"
          ></b-form-radio-group>
        </div>
        <b-form-group v-if="data.domain.selection == 'custom_domain'">
          <b-form-input
            v-model="data.domain.name"
            :placeholder="getDomainExample()"
            name="customDomainName"
          ></b-form-input>
        </b-form-group>

        <b-input-group
          v-if="data.domain.selection == 'litegix_domain'"
          :append="getDomainSuffix()"
        >
          <b-form-input
            v-model="data.domain.name"
            name="litegixDomainName"
            required
          ></b-form-input>
        </b-input-group>

        <fieldset v-if="data.domain.selection == 'custom_domain'">
          <b-form-group>
            <b-form-checkbox
              size="lg"
              name="wwwEnabled"
              v-model="data.domain.wwwEnabled"
            >
              Enable www version of this domain
            </b-form-checkbox>
          </b-form-group>
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
        <b-form-group>
          <b-form-checkbox
            size="lg"
            name="isUserExists"
            v-model="data.isUserExists"
          >
            Use existing system user
          </b-form-checkbox>
        </b-form-group>
        <b-form-group label="User (Owner of this Web Application)">
          <b-form-input
            v-show="!data.isUserExists"
            name="newowner"
            v-model="data.newowner"
            placeholder="Username"
          ></b-form-input>
          <b-form-select
            v-show="data.isUserExists"
            name="owner"
            size="lg"
            v-model="data.owner"
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
            v-model="data.phpVersion"
            :options="php_versions"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Web Application Stack">
          <b-form-select
            name="webAppStack"
            size="lg"
            v-model="data.webAppStack"
            :options="web_application_stacks"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="SSL/TLS Method">
          <b-form-select
            name="sslMethod"
            size="lg"
            v-model="data.sslMethod"
            required
            :options="web_ssl_methods"
          ></b-form-select>
        </b-form-group>

        <b-form-group>
          <b-form-checkbox
            size="lg"
            name="enableAutoSSL"
            v-model="data.enableAutoSSL"
          >
            Enable AutoSSL
          </b-form-checkbox>
        </b-form-group>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            WordPress
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="Site Title">
          <b-form-input
            name="siteTitle"
            v-model="data.wordpress.siteTitle"
            placeholder="e.g: My WordPress Site"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Username">
          <b-form-input
            name="adminUserName"
            v-model="data.wordpress.adminUserName"
            placeholder="WordPress admin username"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Admin Password">
          <b-form-input
            name="adminPassword"
            type="password"
            v-model="data.wordpress.adminPassword"
            placeholder="WordPress admin password"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Email">
          <b-form-input
            type="email"
            name="adminEmail"
            v-model="data.wordpress.adminEmail"
            placeholder="WordPress admin email"
          ></b-form-input>
        </b-form-group>

        <!-- <b-form-group label="Canvas">
          <label class="control-label">Canvas</label>
          <a
            href=""
            role="button"
            type="button"
            class="font-weight-bold btn-add-new-item ml-4"
          >
            (Add new canvas)</a
          >
          <b-form-select
            size="lg"
            name="canvas"
            v-model="data.canvas"
            :options="canvases"
          ></b-form-select>
        </b-form-group>
        <p class="text-paragraph">
          Read more about WordPress Canvas
          <a href="" target="_blank" class="font-weight-bold">here.</a>
        </p> -->
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Database for WordPress
          </span>
        </h3>
      </div>
      <div class="card-body pt-0 pb-10">
        <b-form-group label="Database User (Optional)">
          <b-form-input
            name="databaseUser"
            v-model="data.wordpress.databaseUser"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Database Password (Optional)">
          <b-input-group>
            <b-form-input
              type="password"
              name="databasePass"
              v-model="data.wordpress.databasePass"
              placeholder="WordPress database user"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Database Name (Optional)">
          <b-form-input
            name="databaseName"
            v-model="data.wordpress.databaseName"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Table Prefix (Optional)">
          <b-form-input
            name="tablePrefix"
            v-model="data.wordpress.tablePrefix"
            placeholder="WordPress database prefix"
          ></b-form-input>
        </b-form-group>

        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add Web Application
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
  CREATE_WORDPRESS_APPLICATION,
  STORE_WORDPRESS_APPLICATION
} from "@/core/services/store/system.module";
export default {
  data() {
    return {
      system_users: [],
      php_versions: [],
      web_application_stacks: [],
      web_environments: [],
      web_ssl_methods: [],
      canvases: [],
      domain_options: [
        { text: "Use test domain", value: "litegix_domain" },
        { text: "Use my own domain / subdomain", value: "custom_domain" }
      ],
      domain_suffix: "",
      data: {
        name: "",
        domain: {
          name: "",
          type: "primary",
          selection: "custom_domain",
          wwwEnabled: false,
          wwwVersion: 1
        },
        isUserExists: true,
        owner: null,
        newowner: null,
        phpVersion: "php8.0",
        webAppStack: "native_nginx",
        sslMethod: "basic",
        enableAutoSSL: false,
        wordpress: {
          siteTitle: "",
          adminUserName: "",
          adminPassword: "",
          adminEmail: "",
          canvas: "",
          databaseUser: "",
          databasePass: "",
          databaseName: "",
          tablePrefix: ""
        }
      },
      selectedUser: null
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store
      .dispatch(CREATE_WORDPRESS_APPLICATION, this.serverId)
      .then(res => {
        console.log(res);
        this.system_users = res.data.system_users;
        this.php_versions = res.data.php_versions;
        this.web_application_stacks = res.data.web_application_stacks;
        this.web_environments = res.data.web_environments;
        this.web_ssl_methods = res.data.web_ssl_methods;
        this.domain_suffix = res.data.domainSuffix;
      });
    this.initForm();
  },
  beforeDestroy() {
    if (this.fv) {
      this.fv.destroy();
    }
  },
  methods: {
    createApplication() {
      console.log("createApplication");
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      const payload = {
        ...this.data,
        owner: this.data.isUserExists ? this.data.owner : this.data.newowner
      };
      if (payload.domain.selection === "litegix_domain") {
        payload.domain.name = `${payload.domain.name}${this.getDomainSuffix()}`;
      }

      this.$store
        .dispatch(STORE_WORDPRESS_APPLICATION, {
          ...payload,
          serverId: this.$parent.serverId
        })
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `Web application ${this.data.name} has been successfully created`
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
      return `/home/${this.selectedUser?.name}/webapps/${this.data.name}/`;
    },
    getDomainExample() {
      const appName = this.data.name || "litegix";
      return `e.g: ${appName}.com or subdomain.${appName}.com`;
    },
    getDomainSuffix() {
      return `.${this.domain_suffix}.litegix.com`;
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
          newowner: {
            validators: {
              notEmpty: {
                message: "The owner is required"
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
          siteTitle: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 5,
                message: "This field must be at least 5 characters"
              }
            }
          },
          adminUserName: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 5,
                message: "This field must be at least 5 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) only"
              }
            }
          },
          adminPassword: {
            validators: {
              notEmpty: {
                message: "This field is required"
              },
              stringLength: {
                min: 8,
                message: "This field must be at least 8 characters"
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) only"
              }
            }
          },
          adminEmail: {
            validators: {
              notEmpty: {
                message: "This field is required"
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
          bootstrap: new Bootstrap(),
          excluded: new Excluded({
            excluded: function(field) {
              return (
                (field == "customDomainName" &&
                  thiz.data.domain.selection != "custom_domain") ||
                (field == "litegixDomainName" &&
                  thiz.data.domain.selection != "litegix_domain") ||
                (field == "newowner" && thiz.data.isUserExists) ||
                (field == "owner" && !thiz.data.isUserExists)
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
