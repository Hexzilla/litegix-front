<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xl-offset-2">
      <div class="container-fluid">
        <div class="row padding-bottom">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Members</h4>
              </div>
              <div class="panel-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th class="text-center">Email</th>
                      <th class="text-center">Remove Member</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Add Team Member</h4>
                <p data-nsfw-filter-status="swf">
                  Add a team member using their email. Team members must have a
                  RunCloud account.
                </p>
              </div>
              <div class="panel-body">
                <form action="/teams/1967/members" role="form">
                  <div class="form-group">
                    <label for="email" class="control-label"
                      >Email
                      <!----></label
                    >
                    <!---->
                    <input
                      type="text"
                      name="email"
                      placeholder="Must be a registered email"
                      class="form-control input-lg"
                    />
                    <!---->
                  </div>
                  <button
                    data-v-69273b5e=""
                    type="submit"
                    class="btn btn-base btn-block"
                  >
                    <span
                      data-v-293d8245=""
                      data-v-69273b5e=""
                      data-nsfw-filter-status="swf"
                      ><span data-v-293d8245="" data-nsfw-filter-status="swf">
                        Add Member
                      </span></span
                    >
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
alert("ok");
// import {
//   SET_BREADCRUMB
// } from "@/core/services/store/breadcrumbs.module";
//import ApiService from "@/core/services/api.service";

export default {
  name: "Members",
  //teamid: 1967,
  data() {},
  methods: {
    addMemberToTeam() {
      //console.log(teamid);
      // ApiService.setHeader();
      // ApiService.get("teams")
      //   .then(({
      //     data
      //   }) => {
      //     this.teams = data.teams;
      //   })
      //   .catch(() => {});
    }
  }
};
//console.log("members arrive!!!!");
</script>

