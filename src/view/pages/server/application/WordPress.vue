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
            v-model="form.name"
            placeholder="e.g: my-application / my_application"
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
            placeholder="e.g: app-gerhold.com or subdomain.app-gerhold.co"
            name="domainName"
          ></b-form-input>
        </b-form-group>

        <b-input-group
          append=".b671ds1vl1-v1p3zx1gp6ye.p.Litegix.link"
          v-if="form.domainType == 'litegix'"
        >
          <b-form-input
            v-model="form.domainName"
            name="domainName"
            required
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

        <b-form-group label="Web Application Stack">
          <b-form-select
            name="webAppStack"
            size="lg"
            v-model="form.webAppStack"
            :options="web_application_stacks"
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
            v-model="form.siteTitle"
            placeholder="e.g: My WordPress Site"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Username">
          <b-form-input
            name="adminUserName"
            v-model="form.adminUserName"
            placeholder="WordPress admin username"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Admin Password">
          <b-form-input
            name="adminPassword"
            v-model="form.adminPassword"
            placeholder="WordPress admin password"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Email">
          <b-form-input
            type="email"
            name="adminEmail"
            v-model="form.adminEmail"
            placeholder="WordPress admin email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Canvas">
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
            v-model="form.canvas"
            :options="canvases"
          ></b-form-select>
        </b-form-group>
        <p class="text-paragraph">
          Read more about WordPress Canvas
          <a href="" target="_blank" class="font-weight-bold">here.</a>
        </p>
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
            v-model="form.databaseUser"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Database Password (Optional)">
          <b-input-group>
            <b-form-input
              type="password"
              name="databasePassword"
              v-model="form.databasePassword"
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
            v-model="form.databaseName"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Table Prefix (Optional)">
          <b-form-input
            name="tablePrefix"
            v-model="form.tablePrefix"
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
        { text: "Use test domain", value: "litegix" },
        { text: "Use my own domain / subdomain", value: "custom" }
      ],
      form: {
        name: "",
        domainType: "custom",
        domainName: "",
        enableW3Version: false,
        owner: null,
        phpVersion: null,
        webAppStack: null,
        sslMode: "basic",
        enableAutoSSL: false,
        suffixName: "app-random",
        siteTitle: "",
        adminUserName: "",
        adminPassword: "",
        adminEmail: "",
        canvas: "",
        databaseUser: "",
        databasePassword: "",
        databaseName: "",
        tablePrefix: ""
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
      });
    this.initForm();
  },
  methods: {
    createApplication() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(STORE_WORDPRESS_APPLICATION, {
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
            path: `/servers/${this.$parent.serverId}/application`
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
      return `/home/${this.selectedUser?.name}/webapps/${this.form.suffixName}/`;
    },
    initForm() {
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
          domainName: {
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
              },
              regexp: {
                regexp: "^[a-zA-Z][a-zA-Z0-9_]*$",
                message:
                  "This field can consist of alphanumeric characters and underscode(_) only"
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
          },
          canvas: {
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
          bootstrap: new Bootstrap()
        }
      });
      this.fv.on("core.form.valid", this.createApplication);
      this.fv.on("core.form.invalid", () => {});
    }
  }
};
</script>
