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

        <hr />
        <h4>WordPress</h4>
        <b-form-group label="Site Title">
          <b-form-input
            name="siteTitle"
            placeholder="e.g: My WordPress Site"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Username">
          <b-form-input
            name="adminUsername"
            placeholder="WordPress admin username"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Admin Password">
          <b-form-input
            name="password"
            placeholder="WordPress admin password"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Admin Email">
          <b-form-input
            type="email"
            name="email"
            placeholder="WordPress admin email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Canvas">
          <b-form-input
            name="canvas"
            placeholder="WordPress admin email"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <label class="control-label">Canvas</label
          ><a
            href=""
            role="button"
            type="button"
            class="font-weight-bold btn-add-new-item ml-4"
          >
            (Add new canvas)</a
          >
          <b-form-select
            size="lg"
            v-model="select"
            :options="keys"
          ></b-form-select>
        </div>
        <p class="text-paragraph">
          Read more about WordPress Canvas
          <a href="" target="_blank" class="font-weight-bold">here.</a>
        </p>

        <h4>Database</h4>
        <b-form-group label="Database User (Optional)">
          <b-form-input
            name="dbUser"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Database Password (Optional)">
          <b-input-group>
            <b-form-input
              type="password"
              name="dbPassword"
              placeholder="WordPress database user"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Database Name (Optional)">
          <b-form-input
            name="dbName"
            placeholder="WordPress database user"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Table Prefix (Optional)">
          <b-form-input
            name="dbPrefix"
            placeholder="WordPress database prefix"
          ></b-form-input>
        </b-form-group>

        <button type="submit" class="btn btn-primary btn-block">
          Add Web Application app-goldner
        </button>
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