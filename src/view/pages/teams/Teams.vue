<template>
  <div>
    <!-- v-if="!isEmpty()"  -->
    <div class="row team-list">
      <!-- <router-link to="/servers/create" v-slot="{ href, navigate }">
                <a
                  :href="href"
                  @click="navigate"
                  class="btn btn-primary btn-shadow-hover font-weight-bolder w-100 py-3"
                >
                  <i class="flaticon2-cube"></i>Create a new server
                </a>
              </router-link> -->
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <router-link to="/teams/create">
          <a
            href="#"
            class="
              card card-custom
              bg-primary bg-hover-state-primary
              card-stretch
              gutter-b
            "
          >
            <div class="card-body">
              <span class="svg-icon svg-icon-white svg-icon-3x ml-n1">
                <inline-svg
                  src="/media/svg/icons/General/Settings-1.svg"
                ></inline-svg>
              </span>
              <div
                class="
                  text-inverse-primary
                  font-weight-bolder font-size-h5
                  mb-2
                  mt-5
                "
              >
                Create Team
              </div>
              <div class="font-weight-bold text-inverse-primary font-size-sm">
                create team
              </div>
            </div>
            <!--end::Body-->
          </a>
        </router-link>
      </div>

      <div
        class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-for="(team, i) in teams"
        :key="i"
      >
        <TeamCard :team="team"></TeamCard>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ApiService from "@/core/services/api.service";
import TeamCard from "./TeamCard.vue";

export default {
  name: "Teams",
  data() {
    return {
      teams: [],
    };
  },
  components: {
    //EmptyTeam,
    TeamCard,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Teams",
      },
    ]);
    // ############ ---> backend test
    //this.getTeams();
    this.teams = [
      {
        id: "1967",
        name: "YashaTeam",
        desc: "YashaTeam Descripttion",
      },
      {
        id: "1968",
        name: "MailTeam",
        desc: "MailTeam Descripttion",
      },
      {
        id: "1969",
        name: "MailTeam1",
        desc: "MailTeam Descripttion",
      },
    ];
    //<--- ############
  },
  methods: {
    getTeams() {
      ApiService.setHeader();
      ApiService.get("teams")
        .then(({ data }) => {
          this.teams = data.teams;
        })
        .catch(() => {});
    },
    isEmpty() {
      return this.teams.length <= 0;
    },
  },
};
</script>
