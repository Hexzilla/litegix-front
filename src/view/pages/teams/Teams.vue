<template>
  <div class="row">
    <div class="col-md-12 mb-8">
      <div class="card card-custom border round">
        <div class="card-header border-bottom-0">
          <div class="card-title">
            <span class="card-icon">
              <i class="flaticon2-chat-1 text-primary"></i>
            </span>
            <h3 class="card-label">All Teams(2 teams)</h3>
          </div>
          <div class="card-toolbar">
            <router-link to="/teams/create" v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="navigate"
                class="
                  btn btn-primary btn-shadow-hover
                  font-weight-bolder
                  w-100
                  py-3
                "
              >
                <i class="flaticon2-cube"></i>Create a new team
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="accordion accordion-solid accordion-toggle-plus" id="dfas">
        <TeamCard v-for="(team, i) in teams" :key="i" :team="team"></TeamCard>
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
        members: [
          { email: "meailteam@mail.com", img: "media/users/300_21.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_22.jpg" },
        ],
      },
      {
        id: "1968",
        name: "MailTeam",
        desc: "MailTeam Descripttion",
        members: [
          { email: "meailteam@mail.com", img: "media/users/300_18.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_19.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_22.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_21.jpg" },
        ],
      },
      {
        id: "1969",
        name: "MailTeam1",
        desc: "MailTeam Descripttion",
        members: [
          { email: "meailteam@mail.com", img: "media/users/300_25.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_23.jpg" },
          { email: "meailteam@mail.com", img: "media/users/300_18.jpg" },
        ],
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
