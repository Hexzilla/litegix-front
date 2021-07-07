<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add New Web Application</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm" data-nsfw-filter-status="swf">Please choose which action that you would like to perform. </span>
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <div class="webapp-type-selection d-flex align-items-center">
        <div class="item align-self-stretch">
          <b-link to="create/custom">
            <label class="btn btn-block btn-checkbox d-flex">
              <i class="rc rc-php"></i>
              <div>
                <h5 class="font-weight-black">Custom Web Application</h5>
                <p>
                  Works for every PHP system. Craft your own web application.
                </p>
              </div>
            </label>
          </b-link>
        </div>
        <div class="item align-self-stretch">
          <b-link to="create/wordpress">
            <label class="btn btn-block btn-checkbox d-flex"
              ><i class="rc rc-wordpress"></i>
              <div>
                <h5 class="font-weight-black">1 Click WordPress</h5>
                <p>
                  Tailored for WordPress enthusiasts. Install with one click.
                </p>
              </div>
            </label>
          </b-link>
        </div>
        <div class="item align-self-stretch">
          <b-link to="create/phpmyadmin">
            <label class="btn btn-block btn-checkbox d-flex"
              ><i class="rc rc-br-phpmyadmin"></i>
              <div>
                <h5 class="font-weight-black">1 Click PHPMyAdmin</h5>
                <p>Install latest phpMyAdmin to manage your databases.</p>
              </div>
            </label>
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/server/application.scss";
@import "@/assets/sass/pages/server/rcicon.scss";
</style>
