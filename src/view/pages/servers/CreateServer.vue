<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">Connect Server</h3>
              </div>
              <i class="wizard-arrow last flaticon2-next"></i>
            </div>
          </div>
        </div>

        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <form class="form" id="kt_form">
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <!-- <h3 class="mb-10 font-weight-bold text-dark">
                  Details
                </h3>
                <div class="form-group">
                  <b-alert show variant="warning">
                    {{ warningText }}
                  </b-alert>
                </div>
                <div class="form-group">
                  <label>Run this command on your server as root user</label>
                  <b-form-textarea
                    id="command"
                    placeholder=""
                    :value="commandValue"
                    rows="8"
                  ></b-form-textarea>
                </div> -->
                <div class="form-group">
                  <label>Configure My Server For</label>
                  <select
                    name="ServerOS"
                    class="form-control form-control-solid form-control-lg"
                  >
                    <option value="nginx">Nginx</option>
                    <option value="openlite">OpenLiteSpeed</option>
                  </select>
                  <!-- <span class="form-text text-muted"
                    >Make sure to select the correct OS that matches with the one on your server, this determines how our install script should behave.</span
                  > -->
                </div>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="Name"
                    placeholder="Name"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label>IP address</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="IP"
                    placeholder="IP address"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label>SSH port</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="SSH"
                    placeholder="SSH port"
                    value=""
                  />
                </div>
                <!-- <div class="form-group">
                  <label>Server type</label>
                  <select
                    name="ServerType"
                    class="form-control form-control-solid form-control-lg"
                    v-model="ServerType"
                  >
                    <option value="Server">Server</option>
                    <option value="LoadBalancer">Load Balancer</option>
                    <option value="DServer">Database Server</option>
                    <option value="RServer">Redis Server</option>
                    <option value="SServer">Storage Server(Minio)</option>
                    <option value="MSServer">MeiliSearch Server</option>
                    <option value="ESServer">ElasticSearch Server</option>
                    <option value="PServer">Plain Server</option>
                    <option value="EServer">Email Server</option>
                  </select>
                </div> -->
                <!-- <div class="row" v-show="ServerType == 'Server'">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Webserver</label>
                      <select
                        name="Webserver"
                        class="form-control form-control-solid form-control-lg"
                      >
                        <option value="NGINX">NGINX</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>PHP Version</label>
                      <select
                        name="PHPVersion"
                        class="form-control form-control-solid form-control-lg"
                      >
                        <option value="PHP80">PHP 8.0</option>
                        <option value="PHP74">PHP 7.4</option>
                        <option value="PHP73">PHP 7.3</option>
                        <option value="PHP72">PHP 7.2</option>
                        <option value="PHP71">PHP 7.1</option>
                        <option value="PHP70">PHP 7.0</option>
                        <option value="PHP56">PHP 5.6</option>
                        <option value="NOPHP">Do not install PHP</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Database</label>
                      <select
                        name="Database"
                        class="form-control form-control-solid form-control-lg"
                      >
                        <option value="MySQL">MySQL 5.7</option>
                        <option value="MariaDB">MariaDB 10.3</option>
                        <option value="PostgreSQL">PostgreSQL 10.9</option>
                        <option value="DBNone">
                          None(do not install a database)
                        </option>
                      </select>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="row" v-show="ServerType == 'DServer'">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Database</label>
                      <select
                        name="Database"
                        class="form-control form-control-solid form-control-lg"
                      >
                        <option value="MySQL">MySQL 5.7</option>
                        <option value="MariaDB">MariaDB 10.3</option>
                        <option value="PostgreSQL">PostgreSQL 10.9</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group" v-show="ServerType == 'ESServer'">
                  <b-alert show variant="primary">
                    When installing a Elasticsearch server we recommend to have a server with the following minimum specifications: 4GB ram, 2 cores and 50GB disk.
                    This is because the Elasticsearch service is a heavy service running on Java and will require you to have a lot of power.
                  </b-alert>
                </div> -->
              </div>

              <div class="d-flex justify-content-center border-top pt-10">
                <div>
                  <!-- <button
                    v-on:click="submit"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                  >
                    Connect Server
                  </button> -->
                  <router-link to="/servers/config" v-slot="{ href, navigate }">
                    <a
                      :href="href"
                      @click="navigate"
                      class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                      >Add this Server</a
                    >
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

export default {
  name: "CreateServer",
  data() {
    return {
      /*ServerType: "Server",
      commandValue: `mkdir -p /root/.ssh && touch /root/.ssh/authorized_keys && echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvVRd/oYPD8IaK1NuIaGkOIV/zvISGrkeBL7XY967cOXgJf26Zr/60bEGYzcQKG1OpAa8g6PPH2skUIw1i3geR3/0atMU1Osj8hV9Z6WCxCFlfGOjmJGzuR+TT8EcgYegdBTE2zIPahajUHaAZTYljb7ewEugflOeh0sRpZ3BER83hu1a8xoibIn+UuSXEN3f++BSdxZNu7suGd46fBgWeUw`,
      warningText: `Your server needs to have a new unused installation of Ubuntu 16.04, 18.04 or 20.04 x64 and must contain a root user. 
                    To get started, add this public key to /root/.ssh/authorized_keys file.`*/
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Server" },
      { title: "Create" }
    ]);
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    }
  }
};
</script>
