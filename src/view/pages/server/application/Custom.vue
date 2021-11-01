<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add Web Application to Server ReCloud</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <form>
        <b-form-group label="Web Application Name">
          <b-form-input
            v-model="form.name"
            placeholder="e.g: my-application / my_application"
          ></b-form-input>
        </b-form-group>

        <div>
          <div class="form-group">
            <label class="control-label">Domain Name</label>
            <b-form-radio-group
              v-model="form.domain"
              :options="domain_options"
              name="domain"
            ></b-form-radio-group>
          </div>
          <b-form-group v-if="form.domain == 'custom'">
            <b-form-input
              v-model="form.domainName"
              placeholder="e.g: app-gerhold.com or subdomain.app-gerhold.co"
              name="domainName"
            ></b-form-input>
          </b-form-group>

          <b-input-group
            append=".b671ds1vl1-v1p3zx1gp6ye.p.Litegix.link"
            v-if="form.domain == 'litegix'"
          >
            <b-form-input v-model="name" name="name"></b-form-input>
          </b-input-group>

          <fieldset v-if="form.domain == 'custom'">
            <b-form-group>
              <b-form-checkbox
                size="lg"
                name="www"
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

        <hr class="mt-6 mb-6" />

        <!-- <b-form-group label="Web Application Owner">
          <b-form-checkbox size="lg" name="useExistingUser"
            >Use existing system user</b-form-checkbox
          >
        </b-form-group> -->

        <div class="form-group">
          <label class="control-label"
            >User (Owner of this Web Application)</label
          >
          <b-form-select
            name="user"
            size="lg"
            v-model="form.user"
            required
            :options="system_users"
            value-field="id"
            text-field="name"
          ></b-form-select>
        </div>

        <hr class="mt-6 mb-6" />

        <b-form-group label="Public Path">
          <b-input-group prepend="/home/Litegix/webapps/app-gerhold">
            <b-form-input name="publicPath"></b-form-input>
          </b-input-group>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">PHP Version</label>
          <b-form-select
            name="user"
            size="lg"
            v-model="form.phpVersion"
            required
            :options="php_versions"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label">Web Application Stack</label>
          <b-form-select
            name="user"
            size="lg"
            v-model="form.webStack"
            required
            :options="web_application_stacks"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label">Environment</label>
          <b-form-select
            name="user"
            size="lg"
            v-model="form.environment"
            required
            :options="web_environments"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label"
            >SSL/TLS Method<i class="rc rc-information info-icon"></i
          ></label>
          <b-form-select
            name="user"
            size="lg"
            v-model="form.sslMethod"
            required
            :options="web_ssl_methods"
          ></b-form-select>
        </div>

        <b-form-group>
          <b-form-checkbox size="lg" name="autoSSL"
            >Enable AutoSSL</b-form-checkbox
          >
        </b-form-group>

        <!-- <b-form-group label="Advanced Settings">
          <b-form-checkbox size="lg" v-model="advanced" name="advanceSetting">
            Advanced Settings (Only use this if you know what you are doing)
          </b-form-checkbox>
        </b-form-group>

        <div v-if="advanced">
          <div>
            <h4>Nginx Settings</h4>
            <b-form-group label="Clickjacking Protection">
              <b-form-checkbox size="lg" name="clickjackingProtection"
                >Clickjacking Protection</b-form-checkbox
              >
            </b-form-group>
            <b-form-group label="Cross-site scripting (XSS) Protection">
              <b-form-checkbox size="lg" name="xssProtection"
                >Cross-site scripting (XSS) Protection</b-form-checkbox
              >
            </b-form-group>
            <b-form-group label="Mime Sniffing Protection">
              <b-form-checkbox size="lg" name="mimeSniffingProtection"
                >Mime Sniffing Protection</b-form-checkbox
              >
            </b-form-group>
            <b-form-group label="PROXY Protocol">
              <b-form-checkbox size="lg" name="proxyProtocol"
                >PROXY Protocol</b-form-checkbox
              >
            </b-form-group>

            <h4>FPM Settings</h4>
            <div class="form-group">
              <label class="control-label">Process Manager</label>
              <b-form-select v-model="select" :options="keys"></b-form-select>
            </div>

            <b-form-group label="pm.max_children">
              <b-form-input
                name="processManagerMaxChildren"
                placeholder="Default: 50"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="pm.max_requests">
              <b-form-input
                name="processManagerMaxRequests"
                type="number"
                placeholder="Default: 500"
              ></b-form-input>
            </b-form-group>
          </div>
          <h4>PHP Settings</h4>
          <b-form-group label="open_basedir">
            <b-form-input
              name="openBasedir"
              placeholder="Default: /home/459412/webapps/app-gerhold:/var/lib/php/session:/tmp"
            ></b-form-input>
          </b-form-group>

          <div class="form-group">
            <label class="control-label">date.timezone</label>
            <b-form-select v-model="select" :options="keys"></b-form-select>
          </div>

          <div class="form-group">
            <label for="disableFunctions" class="control-label"
              >disable_functions</label
            >
            <textarea
              name="disableFunctions"
              rows="7"
              placeholder=""
              class="form-control"
            ></textarea>
          </div>
          <b-form-group label="max_execution_time">
            <b-form-input
              name="maxExecutionTime"
              placeholder="Default: 30"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="max_execution_time">
            <b-form-input
              type="number"
              name="maxExecutionTime"
              placeholder="Default: 30"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="max_input_time">
            <b-form-input
              type="number"
              name="maxInputTime"
              placeholder="Default: 60"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="max_input_vars">
            <b-form-input
              type="number"
              name="maxInputVars"
              placeholder="Default: 1000"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="memory_limit">
            <b-input-group append="MG">
              <b-form-input
                type="number"
                name="memoryLimit"
                placeholder="Default: 256"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="post_max_size (Nginx and PHP)">
            <b-input-group append="MG">
              <b-form-input
                type="number"
                name="postMaxSize"
                placeholder="Default: 256"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="uploadMaxFilesize">
            <b-input-group append="MG">
              <b-form-input
                type="number"
                name="uploadMaxFilesize"
                placeholder="Default: 256"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="session.gc_maxlifetime">
            <b-input-group append="seconds">
              <b-form-input
                type="number"
                name="sessionGcMaxlifetime"
                placeholder="Default: 1440"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="allow_url_fopen">
            <b-checkbox size="lg" name="allowUrlFopen"
              >allow_url_fopen</b-checkbox
            >
          </b-form-group>
        </div> -->

        <button type="submit" class="btn btn-primary btn-block">
          Add Web Application app-gerhold
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { CREATE_CUSTOM_WEB_APPLICATION } from "@/core/services/store/system.module";
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
        domain: "custom",
        domainName: "",
        enableW3Version: false,
        user: null,
        phpVersion: null,
        webStack: null,
        environment: "production",
        sslMethod: "basic"
      }
    };
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store
      .dispatch(CREATE_CUSTOM_WEB_APPLICATION, this.serverId)
      .then(res => {
        this.system_users = res.data.system_users;
        this.php_versions = res.data.php_versions;
        this.web_application_stacks = res.data.web_application_stacks;
        this.web_environments = res.data.web_environments;
        this.web_ssl_methods = res.data.web_ssl_methods;
        console.log(res);
      });
  }
};
</script>
