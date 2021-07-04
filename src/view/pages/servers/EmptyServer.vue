<template>
  <div class="text-center panel panel-transparent">
    <div class="panel-body">
      <img
        src="media/img/server-transfer.svg"
        class="dashboard_img"
        alt="empty-state-illustration"
        data-nsfw-filter-status="sfw"
        style="visibility: visible"
      />
      <div class="content">
        <h2 class="font-weight-black">Connect your first server</h2>
        <p>
          Connect your cloud VPS with our panel first and kickstart your
          productivity with RunCloud straight away!
        </p>
      </div>
      <b-link class="btn btn-base go-connect-btn" to="/servers/connect">
        Let's get started
      </b-link>
    </div>
  </div>
</template>
<style scoped src="@/assets/styles/app.css">
</style>

<script>
export default {
  name: "Empty",
};
</script>
