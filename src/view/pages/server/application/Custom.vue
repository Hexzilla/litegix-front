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
            v-model="name"
            placeholder="e.g: my-application / my_application"
          ></b-form-input>
        </b-form-group>

        <div>
          <div class="form-group">
            <label class="control-label">Domain Name</label>
            <b-form-radio-group
              v-model="domainSelection"
              :options="domain_options"
              name="domainSelection"
            ></b-form-radio-group>
          </div>
          <b-form-group v-if="domainSelection == 'customDomain'">
            <b-form-input
              v-model="domainName"
              placeholder="e.g: app-gerhold.com or subdomain.app-gerhold.co"
              name="domainName"
            ></b-form-input>
          </b-form-group>

          <b-input-group
            append=".b671ds1vl1-v1p3zx1gp6ye.p.runcloud.link"
            v-if="domainSelection == 'runcloudDomain'"
          >
            <b-form-input v-model="name" name="name"></b-form-input>
          </b-input-group>

          <fieldset v-if="domainSelection == 'customDomain'">
            <b-form-group>
              <b-form-checkbox size="lg" name="www"
                >Enable www version of this domain</b-form-checkbox
              >
            </b-form-group>

            <div class="form-group">
              <label class="control-label">DNS Integration</label>
              <b-form-select v-model="select" :options="keys"></b-form-select>
            </div>
          </fieldset>
        </div>

        <hr />
        <b-form-group label="Web Application Owner">
          <b-form-checkbox size="lg" name="useExistingUser"
            >Use existing system user</b-form-checkbox
          >
        </b-form-group>

        <div class="form-group">
          <label class="control-label"
            >User (Owner of this Web Application)</label
          >
          <b-form-select v-model="select" :options="keys"></b-form-select>
        </div>

        <hr />
        <b-form-group label="Public Path">
          <b-input-group prepend="/home/runcloud/webapps/app-gerhold">
            <b-form-input name="publicPath"></b-form-input>
          </b-input-group>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">PHP Version</label>
          <b-form-select v-model="select" :options="keys"></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label">Web Application Stack</label>
          <b-form-select v-model="select" :options="keys"></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label"
            >Stack Mode<i class="rc rc-information info-icon"></i
          ></label>
          <b-form-select v-model="select" :options="keys"></b-form-select>
        </div>

        <div class="form-group">
          <label class="control-label"
            >SSL/TLS Method<i class="rc rc-information info-icon"></i
          ></label>
          <b-form-select v-model="select" :options="keys"></b-form-select>
        </div>

        <b-form-group>
          <b-form-checkbox size="lg" name="autoSSL"
            >Enable AutoSSL</b-form-checkbox
          >
        </b-form-group>

        <b-form-group label="Advanced Settings">
          <b-form-checkbox size="lg" v-model="advanced" name="advanceSetting"
            >Advanced Settings (Only use this if you know what you are
            doing)</b-form-checkbox
          >
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
            <b-checkbox size="lg" name="allowUrlFopen">allow_url_fopen</b-checkbox>
          </b-form-group>
        </div>

        <button type="submit" class="btn btn-primary btn-block"> Add Web Application app-gerhold </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      domainSelection: "customDomain",
      domainName: "",
      domain_options: [
        { text: "Use test domain", value: "runcloudDomain" },
        { text: "Use my own domain / subdomain", value: "customDomain" },
      ],
      advanced: false,
      select: "",
      keys: [],
    };
  },
};
</script>