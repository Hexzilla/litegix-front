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
        <router-link to="/teams/create" v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
            <div class="panel panel-default panel-add-team">
              <div class="panel-body">
                <div class="image"></div>
                <p data-nsfw-filter-status="swf">Create A Team</p>
              </div>
            </div>
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
      teams: []
    };
  },
  components: {
    //EmptyTeam,
    TeamCard
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Teams"
      }
    ]);
    // ############ ---> backend test
    //this.getTeams();
    this.teams = [
      {
        id: "1967",
        name: "YashaTeam",
        desc: "YashaTeam Descripttion"
      },
      {
        id: "1968",
        name: "MailTeam",
        desc: "MailTeam Descripttion"
      },
      {
        id: "1969",
        name: "MailTeam1",
        desc: "MailTeam Descripttion"
      }
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
    }
  }
};
</script>
