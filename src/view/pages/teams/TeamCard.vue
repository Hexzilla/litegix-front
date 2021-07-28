<template>
  <div class="card">
    <div class="card-header" id="headingOne3">
      <div class="card-title" v-b-toggle="team.id">
        {{ team.name }} ({{ team.members.length }})
      </div>
    </div>
    <b-collapse :id="team.id" visible accordion="my-teams" role="tabpanel">
      <b-card-body class="border-none">
        <div class="d-flex">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
            <div class="symbol symbol-50 symbol-lg-120">
              <img
                :src="team.members[0].img"
                alt="image"
                title="team manager"
              />
            </div>

            <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
              <span class="font-size-h3 symbol-label font-weight-boldest"
                >JM</span
              >
            </div>
          </div>
          <!--end::Pic-->

          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1">
              <div class="d-flex mr-3">
                <a
                  href="#"
                  class="
                    text-dark-75 text-hover-primary
                    font-size-h5 font-weight-bold
                    mr-3
                  "
                  >{{ team.members[0].email }}</a
                >
              </div>
              <div class="my-lg-0 my-3">
                <a
                  href="#"
                  class="
                    btn btn-sm btn-light-success
                    font-weight-bolder
                    text-uppercase
                    mr-3
                  "
                  >Members</a
                >
                <a
                  href="#"
                  class="
                    btn btn-sm btn-info
                    font-weight-bolder
                    text-uppercase
                    mr-3
                  "
                  >Permision</a
                >
                <a
                  href="#"
                  class="
                    btn btn-sm btn-danger
                    font-weight-bolder
                    text-uppercase
                  "
                  @click="showModalDelTeam"
                  >Remove</a
                >
              </div>
            </div>
            <!--end::Title-->

            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between mt-1">
              <div class="d-flex flex-column flex-grow-1 pr-8">
                <!-- <div class="d-flex flex-wrap mb-4">
                        <a
                          href="#"
                          class="
                            text-dark-50 text-hover-primary
                            font-weight-bold
                            mr-lg-8 mr-5
                            mb-lg-0 mb-2
                          "
                          ><i class="flaticon2-new-email mr-2 font-size-lg"></i
                          >jason@siastudio.com</a
                        >
                        <a
                          href="#"
                          class="
                            text-dark-50 text-hover-primary
                            font-weight-bold
                            mr-lg-8 mr-5
                            mb-lg-0 mb-2
                          "
                          ><i class="flaticon2-calendar-3 mr-2 font-size-lg"></i
                          >PR Manager
                        </a>
                        <a
                          href="#"
                          class="
                            text-dark-50 text-hover-primary
                            font-weight-bold
                          "
                          ><i
                            class="flaticon2-placeholder mr-2 font-size-lg"
                          ></i
                          >Melbourne</a
                        >
                      </div> -->

                <div class="font-weight-bold text-dark-50">
                  Description:{{ team.desc }}
                </div>
              </div>

              <div class="d-flex align-items-center mt-lg-12 mt-8">
                <span class="font-weight-bold text-dark-75">Members: </span>
                <div class="mx-3">
                  <div class="symbol-group symbol-hover">
                    <div
                      v-for="(member, i) in team.members"
                      :key="i"
                      class="symbol symbol-30 symbol-circle"
                      data-toggle="tooltip"
                      :title="member.email"
                    >
                      <img alt="Pic" :src="member.img" />
                    </div>
                    <!-- <div class="symbol symbol-30 symbol-circle symbol-light">
                      <span class="symbol-label font-weight-bold">5+</span>
                    </div> -->
                  </div>
                </div>
                <!-- <span class="font-weight-bolder text-dark">78%</span> -->
              </div>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
    <b-modal ref="delConfirm" hide-footer :title="'Remove Team ' + team.name">
      <span class="label label-lg label-inline label-light-danger h-auto">
        This will prevent team members inside this team from accessing your
        servers.
      </span>
      <b-form>
        <b-row class="my-5">
          <b-col sm="3">
            <label for="input-none mt-5">Team Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              id="input-none"
              :state="null"
              placeholder="Insert the Team name that you want to remove"
            ></b-form-input>
          </b-col>
          
            <b-button
              class="mt-3 ml-auto mr-5"
              variant="outline-danger"
              @click="removeTeam"
              >Remove</b-button
            >
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
//import ComfirmDialog from "./ConfirmDialog.vue";
export default {
  name: "SeamCard",
  // components : "ConfirmDialog",
  props: ["team"],
  data() {
    return {};
  },
  methods: {
    showModalDelTeam() {
      this.$refs["delConfirm"].show();
    },
    removeTeam() {},
  },
};
</script>

