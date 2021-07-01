<template>
  <div class="panel panel-default panel-team-item">
    <div class="panel-body">
      <div class="short-form square">
        <div>Ma</div>
      </div>
      <ul class="list-inline">
        <li data-original-title="" title="">
          <a
            role="button"
            class="text-danger rc rc-trash-line"
            data-nsfw-filter-status="swf"
            id="btn-del-team"
            @click="showModalDelTeam"
          ></a>
        </li>

        <li data-original-title="" title="">
          <!-- href="/teams/members?teamid=1967" -->
          <a
            href="/members"
            class="text-success rc rc-user-line"
            data-nsfw-filter-status="swf"
          ></a>
        </li>
        <li data-original-title="" title="">
          <a
            href="/teams/servers/1967"
            class="text-success rc rc-server-line"
            data-nsfw-filter-status="swf"
          ></a>
        </li>
        <li data-original-title="" title="">
          <a
            href="/teams/edit/1967"
            class="text-primary rc rc-pencil-line"
            data-nsfw-filter-status="swf"
          ></a>
        </li>
      </ul>
      <div class="info">
        <p class="team-name" data-nsfw-filter-status="swf">{{ team.name }}</p>
        <p class="team-description" data-nsfw-filter-status="swf">
          {{ team.desc }}
        </p>
      </div>
    </div>

    <b-modal
      ref="delConfirm"
      class="swal2-container swal2-top swal2-fade swal2-hidden"
      style="overflow-y: auto; display: none"
      id="delConfirm"
    >
      <h2 class="swal2-title" id="swal2-title">Remove team</h2>
      <div id="swal2-content" class="swal2-content" style="display: block">
        Remove team <strong>MaximYashaTeam</strong>. This will prevent team
        members inside this team from accessing your servers.
      </div>
      <input
        class="swal2-input form-control"
        placeholder="Insert the item name that you want to remove"
        type="text"
        style="display: block"
      /><input
        type="file"
        class="swal2-file form-control"
        style="display: none"
      />
      <div class="swal2-range form-control" style="display: none">
        <output></output><input type="range" />
      </div>
      <select class="swal2-select form-control" style="display: none"></select>
      <div class="swal2-radio form-control" style="display: none"></div>
      <label
        for="swal2-checkbox"
        class="swal2-checkbox form-control"
        style="display: none"
        ><input type="checkbox"/></label
      ><textarea
        class="swal2-textarea form-control"
        style="display: none"
      ></textarea>
      <div
        class="swal2-validationerror"
        id="swal2-validationerror"
        style="display: none"
      ></div>
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
    }
  }
};
</script>
<style scoped src="@/assets/styles/app.css"></style>
