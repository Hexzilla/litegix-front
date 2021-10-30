<template>
  <v-card class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Connect Server</h4>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <div class="d-flex justify-content-between align-items-top">
                <label class="control-label">Server Provider</label>
                <a
                  role="button"
                  type="button"
                  class="font-weight-bold"
                  @click="show_all = !show_all"
                  style="padding: unset"
                >
                  {{ show_all ? "Show all providers" : "Hide all providers" }}
                </a>
              </div>
              <div
                id="vps-selection"
                class="vps-selection"
                :class="show_all ? 'hide_all_provider' : 'show_all_provider'"
              >
                <label
                  v-for="provider in providers"
                  :key="provider.id"
                  class="btn btn-block btn-checkbox"
                  :class="sel_provider == provider.slug && 'active'"
                >
                  <span>
                    <i :class="'rc-br-' + provider.slug" class="rc-vps rc"></i>
                  </span>
                  <input
                    v-model="sel_provider"
                    type="radio"
                    role="radio"
                    aria-checked="true"
                    name="provider"
                    :value="provider.slug"
                  />
                  <span>{{ provider.name }}</span>
                </label>
              </div>
              <!---->
            </div>
            <div class="form-group" v-if="sel_provider">
              <label class="control-label">Provision Type</label>
              <div class="row installation-type-selection">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label
                    class="text-left btn btn-block btn-checkbox"
                    :class="getProvisionTypeClass('build')"
                  >
                    <input
                      type="radio"
                      v-model="provision_type"
                      :disabled="isdisabled"
                      role="radio"
                      aria-checked="true"
                      name="provision"
                      value="build"
                    />
                    <div class="d-flex">
                      <i class="rc-ln-blueprint d-inline-block"></i>
                      <div class="d-inline-block">
                        <p class="font-weight-bold">Build Server</p>
                        <p>
                          Build new server within our panel using provider API
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label
                    class="text-left btn btn-block btn-checkbox"
                    :class="getProvisionTypeClass('ipaddress')"
                  >
                    <input
                      type="radio"
                      v-model="provision_type"
                      role="radio"
                      aria-checked="true"
                      name="provision"
                      value="ipaddress"
                    />
                    <div class="d-flex">
                      <i class="rc-ln-plug d-inline-block"></i>
                      <div class="d-inline-block">
                        <p class="font-weight-bold">Connect via IP Address</p>
                        <p>
                          Connect external server with Litegix via IP Address
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <!---->
            </div>
            <div>
              <div class="server-installation-note" v-if="provision_type">
                <div class="row">
                  <div class="col-sm-12 col-md-7 col-lg-8 col-xs-12">
                    <h5 class="title font-weight-black">Installation note:</h5>
                    <p>
                      Before you proceed, have some time to read the
                      instructions below. This will help you get your first
                      server up and running quickly.
                    </p>
                    <div class="content">
                      <ol v-if="provision_type == 'ipaddress'">
                        <li>
                          You need to have a cloud Virtual Private Server (VPS)
                          hosting first to use Litegix.
                        </li>
                        <li>
                          You need to manually create server on your VPS
                          provider first.
                        </li>
                        <li>
                          Ensure that you are using or create a
                          <strong
                            >fresh Ubuntu server (18.04/20.04 LTS 64bit)</strong
                          >.
                        </li>
                        <li>
                          Litegix will not work on existing production server
                        </li>
                        <li>
                          Litegix would not work with NAT VPN and OpenVZ.<a
                            href=""
                            target="_blank"
                            alt="noopener noreferrer"
                            class="font-weight-semibold"
                            >What is this?</a
                          >
                        </li>
                        <li>
                          Please enable inbound traffic for 80/tcp, 443/tcp and
                          34210/tcp if you are using external firewall. Read
                          <a
                            href=""
                            target="_blank"
                            alt="noopener noreferrer"
                            class="font-weight-semibold"
                            >here</a
                          >
                          on how to enable it.
                        </li>
                      </ol>
                      <ol v-if="provision_type == 'build'">
                        <li>
                          You first need to have a cloud VPS provider account.
                        </li>
                        <li>
                          Get and add VPS provider API key. Read
                          <a
                            href="https://my.vultr.com/settings/#settingsapi"
                            alt="Vultr"
                            target="_blank"
                            class="font-weight-semibold"
                            >here</a
                          >
                          on how to generate and add your VPS provider API key.
                        </li>
                        <li>
                          Choose your desired instance setup and we will deploy
                          it for you
                        </li>
                      </ol>
                    </div>
                  </div>
                  <!---->
                  <div class="col-md-5 col-lg-4 hidden-xs hidden-sm">
                    <img
                      src="media/products/22.png"
                      alt="illustration-reading"
                      class="img-responsive"
                      style="height: 320px; visibility: visible"
                      data-nsfw-filter-status="sfw"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group" v-if="provision_type">
                <label class="control-label">Configure My Server For</label>
                <div class="row installation-type-selection">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <label
                      class="text-left btn btn-block btn-checkbox"
                      :class="server_configure == 'nginx' ? 'active' : ''"
                      style="height: 100%"
                    >
                      <input
                        type="radio"
                        role="radio"
                        v-model="server_configure"
                        aria-checked="true"
                        name="webserver"
                        value="nginx"
                      />
                      <div class="d-flex">
                        <img
                          src="media/client-logos/logo3.png"
                          alt="Nginx"
                          class="web-server-img"
                          data-nsfw-filter-status="sfw"
                          style="visibility: visible"
                        />
                        <!---->
                        <div class="d-inline-block">
                          <p class="font-weight-bold">Nginx</p>
                          <p style="margin-top: 8px">
                            Native Nginx, Nginx-Apache2 Hybrid, and custom Nginx
                            web app stack.
                          </p>
                          <!---->
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <label
                      class="text-left btn btn-block btn-checkbox"
                      :class="server_configure == 'ols' ? 'active' : ''"
                      style="height: 100%"
                    >
                      <input
                        type="radio"
                        role="radio"
                        v-model="server_configure"
                        aria-checked="true"
                        name="webserver"
                        value="ols"
                      />
                      <div class="d-flex">
                        <!---->
                        <img
                          src="media/client-logos/logo2.png"
                          alt="OpenLiteSpeed"
                          class="web-server-img"
                          data-nsfw-filter-status="sfw"
                          style="visibility: visible"
                        />
                        <div class="d-inline-block">
                          <p class="font-weight-bold">OpenLiteSpeed</p>
                          <!---->
                          <p style="margin-top: 8px">
                            OpenLiteSpeed web app stack.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <div v-if="provision_type == 'build'">
              <div class="form-group">
                <label for="name" class="control-label"
                  >Server Name
                  <!----></label
                >
                <!---->
                <input
                  type="text"
                  name="name"
                  placeholder="Chicago01, SG2, Japan Production, Staging1, etc"
                  class="form-control input-lg"
                />
                <!---->
              </div>
              <div class="form-group">
                <label for="ipAddress" class="control-label"
                  >IP Address
                  <!----></label
                >
                <!---->
                <input
                  type="text"
                  name="ipAddress"
                  placeholder="xxx.xxx.xxx.xxx"
                  class="form-control input-lg"
                />
                <!---->
              </div>
              <!---->
            </div>
            <div
              style="position: relative"
              v-if="provision_type == 'ipaddress'"
            >
              <a
                role="button"
                type="button"
                class="font-weight-bold btn-add-new-key"
                @click="dialog = true"
                >Add new key</a
              >
              <div class="form-group">
                <label for="keys" class="control-label">Keys</label>
                <b-form-select
                  v-model="selected_key"
                  :options="keys"
                ></b-form-select>
              </div>
            </div>
            <div v-if="provision_type">
              <button type="submit" class="btn btn-base btn-block">
                <span>
                  <span>
                    {{
                      provision_type == "build"
                        ? "Add this server"
                        : "Build server"
                    }}
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
          transition="dialog-top-transition"
        >
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                class="close"
                @click="dialog = false"
              >
                <span aria-hidden="true">
                  <i class="rc rc-cross"></i>
                </span>
              </button>
              <h4 class="modal-title">Add New API Key</h4>
              <p class="modal-description">
                <a href="" target="_blank" class="font-weight-semibold"
                  >How to get an API key?</a
                >
              </p>
            </div>
            <div class="modal-body">
              <form action="" method="POST" role="form">
                <div class="form-group">
                  <label for="label" class="control-label">Label</label>
                  <input
                    type="text"
                    name="label"
                    placeholder="Label for this API Key"
                    class="form-control input-lg"
                  />
                </div>

                <div class="form-group">
                  <label for="service" class="control-label">Service</label>
                  <b-form-select
                    id="service"
                    v-model="service"
                    :options="services"
                  ></b-form-select>
                </div>

                <div class="form-group">
                  <label for="secret" class="control-label">Secret</label>
                  <p class="form-input-description">
                    You can create API Key for Amazon Web Service by using this
                    URL:
                    <a target="_blank" href=""
                      >https://console.aws.amazon.com/iam/home?#/security_credentials</a
                    >
                  </p>
                  <input
                    type="text"
                    name="secret"
                    placeholder="xxxxx..."
                    class="form-control input-lg"
                  />
                </div>
                <button type="submit" class="btn btn-base btn-block">
                  <span>
                    <span> Add API Key </span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </v-dialog>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      service: "",
      server_configure: "",
      show_all: true,
      sel_provider: "",
      provision_type: "",
      isdisabled: false,
      selected_key: null,
      keys: [{ value: null, text: "Please select an option" }],
      services: [{ value: null, text: "Please select an option" }],
      providers: [
        {
          id: 2,
          name: "Linode",
          slug: "linode",
          provisionReady: 1,
          active: 1
        },
        {
          id: 3,
          name: "DigitalOcean",
          slug: "digitalocean",
          provisionReady: 1,
          active: 1
        },
        {
          id: 6,
          name: "Vultr",
          slug: "vultr",
          provisionReady: 1,
          active: 1
        },
        {
          id: 7,
          name: "UpCloud",
          slug: "upcloud",
          provisionReady: 1,
          active: 1
        },
        {
          id: 9,
          name: "Amazon Lightsail",
          slug: "lightsail",
          provisionReady: 1,
          active: 1
        },
        {
          id: 4,
          name: "Google Cloud Platform",
          slug: "gcp",
          provisionReady: 0,
          active: 0
        },
        {
          id: 5,
          name: "Amazon Web Service",
          slug: "aws",
          provisionReady: 0,
          active: 0
        },
        {
          id: 8,
          name: "Azure",
          slug: "azure",
          provisionReady: 0,
          active: 0
        }
      ]
    };
  },
  methods: {
    getProvisionTypeClass(type) {
      console.log(type + "=" + this.provision_type);
      let provider = this.providers.find(c => c.slug == this.sel_provider);
      if (provider == undefined) {
        this.provision_type = "";
        return "";
      }
      let provisionReady = provider.provisionReady;
      if (type == "build") {
        if (this.provision_type == type && provisionReady === 1) {
          this.isdisabled = false;
          return "active";
        } else if (provisionReady === 0) {
          if (this.provision_type == type) {
            this.provision_type = "ipaddress";
          }
          this.isdisabled = true;
          return "disabled";
        } else {
          this.isdisabled = false;
          return "";
        }
      } else {
        if (this.provision_type == type) {
          return "active";
        }
        return "";
      }
    }
  }
};
</script>
