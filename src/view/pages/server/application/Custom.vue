<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add Web Application to Server ReCloud</h4>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="name" class="control-label">Web Application Name</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="e.g: my-application / my_application"
              class="form-control input-lg"
            />
          </div>
          <div>
            <div class="form-group" style="margin-bottom: 0px">
              <label class="control-label">Domain Name</label>
              <div class="d-flex justify-content align-items-center">
                <div class="radio radio-primary radio-inline">
                  <input
                    type="radio"
                    id="runcloudDomain"
                    name="domainSelection"
                    v-model="domainSelection"
                    value="runcloudDomain"
                  />
                  <label for="runcloudDomain">Use test domain</label>
                </div>
                <div class="radio radio-primary radio-inline">
                  <input
                    v-model="domainSelection"
                    type="radio"
                    id="customDomain"
                    name="domainSelection"
                    value="customDomain"
                  />
                  <label for="customDomain"
                    >Use my own domain / subdomain</label
                  >
                </div>
              </div>
            </div>
            <div class="form-group" v-if="domainSelection == 'customDomain'">
              <input
                type="text"
                name="domainName"
                v-model="domainName"
                placeholder="e.g: app-gerhold.com or subdomain.app-gerhold.com"
                class="form-control input-lg"
              />
            </div>

            <div class="input-group" v-if="domainSelection == 'runcloudDomain'">
              <input
                v-model="name"
                type="text"
                name="name"
                placeholder=""
                class="form-control input-lg"
              />
              <div class="input-group-addon">
                .b671ds1vl1-v1p3zx1gp6ye.p.runcloud.link
              </div>
            </div>

            <fieldset v-if="domainSelection == 'customDomain'">
              <div class="form-group">
                <div class="checkbox checkbox-primary">
                  <input type="checkbox" id="www" name="www" class="styled" />
                  <label for="www">Enable www version of this domain</label>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label">DNS Integration</label>
                <b-form-select
                  size="lg"
                  v-model="select"
                  :options="keys"
                ></b-form-select>
              </div>
            </fieldset>
          </div>

          <hr />
          <div class="form-group">
            <label class="control-label">Web Application Owner</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="useExistingUser"
                name="useExistingUser"
                class="styled"
              />
              <label for="useExistingUser">Use existing system user</label>
            </div>
          </div>

          <div class="form-group">
            <label class="control-label"
              >User (Owner of this Web Application)</label
            >
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <hr />
          <div class="form-group" title="">
            <label for="publicPath" class="control-label">Public Path </label>

            <div class="input-group">
              <div class="input-group-addon">
                /home/runcloud/webapps/app-gerhold
              </div>
              <input
                type="text"
                name="publicPath"
                placeholder=""
                class="form-control input-lg"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label">PHP Version</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <div class="form-group">
            <label class="control-label">Web Application Stack</label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <div class="form-group">
            <label class="control-label"
              >Stack Mode<i class="rc rc-information info-icon"></i
            ></label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <div class="form-group">
            <label class="control-label"
              >SSL/TLS Method<i class="rc rc-information info-icon"></i
            ></label>
            <b-form-select
              size="lg"
              v-model="select"
              :options="keys"
            ></b-form-select>
          </div>

          <div class="d-flex align-items-baseline">
            <div class="form-group">
              <div class="checkbox checkbox-primary">
                <input
                  type="checkbox"
                  id="autoSSL"
                  name="autoSSL"
                  class="styled"
                />
                <label for="autoSSL">Enable AutoSSL</label
                ><i class="rc rc-information" title=""></i>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">Advanced Settings</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="advanceSetting"
                v-model="advanced"
                name="advanceSetting"
                class="styled"
              />
              <label for="advanceSetting"
                >Advanced Settings (Only use this if you know what you are
                doing)</label
              >
            </div>
          </div>

          <div
            class="animated fadeIn"
            :style="{ display: advanced ? 'unset' : 'none' }"
          >
            <div>
              <h4>Nginx Settings</h4>
              <div class="form-group">
                <label class="control-label">Clickjacking Protection</label>

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="clickjackingProtection"
                    name="clickjackingProtection"
                    class="styled"
                  />
                  <label for="clickjackingProtection"
                    >Clickjacking Protection</label
                  >
                </div>
              </div>
              <div class="form-group">
                <label class="control-label"
                  >Cross-site scripting (XSS) Protection</label
                >

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="xssProtection"
                    name="xssProtection"
                    class="styled"
                  />
                  <label for="xssProtection"
                    >Cross-site scripting (XSS) Protection</label
                  >
                </div>
              </div>
              <div class="form-group">
                <label class="control-label">Mime Sniffing Protection</label>

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="mimeSniffingProtection"
                    name="mimeSniffingProtection"
                    class="styled"
                  />
                  <label for="mimeSniffingProtection"
                    >Mime Sniffing Protection</label
                  >
                </div>
              </div>
              <div class="form-group">
                <label class="control-label">PROXY Protocol</label>

                <div class="checkbox checkbox-primary">
                  <input
                    type="checkbox"
                    id="proxyProtocol"
                    name="proxyProtocol"
                    class="styled"
                  />
                  <label for="proxyProtocol"
                    >Run this Web App in PROXY Protocol if you are behind a load
                    balancer using a protocol</label
                  >
                </div>
              </div>
              <h4>FPM Settings</h4>
              <div class="form-group">
                <label class="control-label">Process Manager</label>
                <b-form-select
                  size="lg"
                  v-model="select"
                  :options="keys"
                ></b-form-select>
              </div>

              <div class="form-group">
                <label for="processManagerMaxChildren" class="control-label"
                  >pm.max_children
                </label>
                <input
                  type="number"
                  name="processManagerMaxChildren"
                  placeholder="Default: 50"
                  class="form-control input-lg"
                />
              </div>
              <div class="form-group">
                <label for="processManagerMaxRequests" class="control-label"
                  >pm.max_requests
                </label>
                <input
                  type="number"
                  name="processManagerMaxRequests"
                  placeholder="Default: 500"
                  class="form-control input-lg"
                />
              </div>
            </div>
            <h4>PHP Settings</h4>
            <div class="form-group" title="">
              <label for="openBasedir" class="control-label"
                >open_basedir
              </label>
              <input
                type="text"
                name="openBasedir"
                placeholder="Default: /home/459412/webapps/app-gerhold:/var/lib/php/session:/tmp"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label class="control-label">date.timezone</label>
              <b-form-select
                size="lg"
                v-model="select"
                :options="keys"
              ></b-form-select>
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
            <div class="form-group">
              <label for="maxExecutionTime" class="control-label"
                >max_execution_time
              </label>
              <input
                type="number"
                name="maxExecutionTime"
                placeholder="Default: 30"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label for="maxInputTime" class="control-label"
                >max_input_time
              </label>
              <input
                type="number"
                name="maxInputTime"
                placeholder="Default: 60"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label for="maxInputVars" class="control-label"
                >max_input_vars
              </label>
              <input
                type="number"
                name="maxInputVars"
                placeholder="Default: 1000"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label for="memoryLimit" class="control-label"
                >memory_limit
              </label>

              <div class="input-group">
                <input
                  type="number"
                  name="memoryLimit"
                  placeholder="Default: 256"
                  class="form-control input-lg"
                />
                <div class="input-group-addon">MB</div>
              </div>
            </div>
            <div class="form-group">
              <label for="postMaxSize" class="control-label"
                >post_max_size (Nginx and PHP)
              </label>

              <div class="input-group">
                <input
                  type="number"
                  name="postMaxSize"
                  placeholder="Default: 256"
                  class="form-control input-lg"
                />
                <div class="input-group-addon">MB</div>
              </div>
            </div>
            <div class="form-group">
              <label for="uploadMaxFilesize" class="control-label"
                >upload_max_filesize
              </label>

              <div class="input-group">
                <input
                  type="number"
                  name="uploadMaxFilesize"
                  placeholder="Default: 256"
                  class="form-control input-lg"
                />
                <div class="input-group-addon">MB</div>
              </div>
            </div>
            <div class="form-group">
              <label for="sessionGcMaxlifetime" class="control-label"
                >session.gc_maxlifetime
              </label>

              <div class="input-group">
                <input
                  type="number"
                  name="sessionGcMaxlifetime"
                  placeholder="Default: 1440"
                  class="form-control input-lg"
                />
                <div class="input-group-addon">seconds</div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">allow_url_fopen</label>

              <div class="checkbox checkbox-primary">
                <input
                  type="checkbox"
                  id="allowUrlFopen"
                  name="allowUrlFopen"
                  class="styled"
                />
                <label for="allowUrlFopen">allow_url_fopen</label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Add Web Application app-gerhold </span></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped src="@/assets/styles/server.css"></style>
<script>
export default {
  data() {
    return {
      name: "",
      domainSelection: "customDomain",
      domainName: "",
      advanced: false,
      select: "",
      keys: [],
    };
  },
};
</script>