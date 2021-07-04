<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Add New Database User</h4>
        <p>
          If you have changed your <strong>root</strong> database password,
          please update your new password inside
          <code>/etc/mysql/my.cnf</code> or adding new user won't work.
        </p>
      </div>
      <div class="panel-body">
        <div>
          <form>
            <div class="form-group">
              <label for="username" class="control-label">Username </label>

              <input
                type="text"
                name="username"
                placeholder="Only alphanumeric and/or _ are allowed"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label for="password" class="control-label">Password </label>

              <div class="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  class="form-control input-lg"
                />
                <span class="input-group-btn"
                  ><button type="button" class="btn input-lg btn-success">
                    <span><span class="rc rc-line-lock"></span></span></button
                ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="password_confirmation" class="control-label"
                >Verify Password
              </label>

              <input
                type="password"
                name="password_confirmation"
                placeholder=""
                class="form-control input-lg"
              />
            </div>
            <button type="submit" class="btn btn-base btn-block">
              <span><span> Add user </span></span>
            </button>
          </form>
          <div tabindex="-1" id="passwordGeneratorModal" class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    class="close"
                  >
                    <span aria-hidden="true"><i class="rc rc-cross"></i></span>
                  </button>
                  <h4 class="modal-title">Password Generator</h4>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label class="control-label">Password Length</label>
                    <div class="d-flex align-items-center">
                      <div
                        class="slider vue-slider vue-slider-ltr"
                        style="padding: 7px 0px; width: auto; height: 4px"
                      >
                        <div class="vue-slider-rail">
                          <div
                            class="vue-slider-process"
                            style="
                              height: 100%;
                              top: 0px;
                              left: 0%;
                              width: 49.0909%;
                              transition-property: width, left;
                              transition-duration: 0.5s;
                            "
                          ></div>
                          <div
                            aria-valuetext="32"
                            class="vue-slider-dot vue-slider-dot-hover"
                            role="slider"
                            aria-valuenow="32"
                            aria-valuemin="5"
                            aria-valuemax="60"
                            aria-orientation="horizontal"
                            tabindex="0"
                            style="
                              width: 14px;
                              height: 14px;
                              transform: translate(-50%, -50%);
                              top: 50%;
                              left: 49.0909%;
                              transition: left 0.5s ease 0s;
                            "
                          >
                            <div class="vue-slider-dot-handle"></div>
                            <div
                              class="
                                vue-slider-dot-tooltip
                                vue-slider-dot-tooltip-top
                              "
                            >
                              <div
                                class="
                                  vue-slider-dot-tooltip-inner
                                  vue-slider-dot-tooltip-inner-top
                                "
                              >
                                <span class="vue-slider-dot-tooltip-text"
                                  >32</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 class="font-weight-bold pwd-lgth">32</h3>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Character Types</label>
                    <br />
                    <div class="row password-option">
                      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <label class="btn btn-block btn-checkbox active"
                          ><input
                            type="checkbox"
                            data-original-title=""
                            title=""
                          />
                          <h4 class="font-weight-bold">A-Z</h4>
                          <p class="font-weight-normal">Uppercase</p>
                        </label>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <label class="btn btn-block btn-checkbox active"
                          ><input
                            type="checkbox"
                            data-original-title=""
                            title=""
                          />
                          <h4 class="font-weight-bold">a-z</h4>
                          <p class="font-weight-normal">Lowercase</p>
                        </label>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <label class="btn btn-block btn-checkbox active"
                          ><input
                            type="checkbox"
                            data-original-title=""
                            title=""
                          />
                          <h4 class="font-weight-bold">0-9</h4>
                          <p class="font-weight-normal">Number</p>
                        </label>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <label class="btn btn-block btn-checkbox active"
                          ><input
                            type="checkbox"
                            data-original-title=""
                            title=""
                          />
                          <h4 class="font-weight-bold">!%@#</h4>
                          <p class="font-weight-normal">Symbol</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Generated Password</label>
                    <div class="input-group">
                      <input
                        type="text"
                        id="passwordGeneratorModal-copyPassword"
                        readonly="readonly"
                        aria-label=""
                        class="form-control input-lg"
                      />
                      <span class="input-group-btn"
                        ><button
                          type="button"
                          data-copied-message="Password copied!"
                          data-clipboard-target="#passwordGeneratorModal-copyPassword"
                          class="btn btn-base copyable input-lg"
                          data-original-title=""
                          title=""
                        >
                          <i class="rc rc-copy"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-success input-lg"
                          data-original-title=""
                          title=""
                        >
                          <span><i class="rc rc-two-arrow"></i></span></button
                      ></span>
                    </div>
                  </div>
                  <button type="button" class="btn btn-base btn-block">
                    Use This Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/app.css"></style>
<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      select: "",
      keys: [],
    };
  },
};
</script>
