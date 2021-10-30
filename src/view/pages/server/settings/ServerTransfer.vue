<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Transfer Server</span
          >
          <div class="text-muted mt-3 font-size-sm">
            <p>
              You can use this feature to transfer your server to another
              account. Transferring this server to new owner will remove
              <strong>Slack Webhook URL</strong>,
              <strong>Telegram Notification</strong> and
              <strong>Health Notification</strong> settings. Once you have
              requested to transfer your server, the particular account must
              accept invitation to receive your server. Transferred server will
              only be able to transfer to another account again after
              <strong>15 days</strong>.
            </p>
            <p>
              Please be advice that your
              <a href="https://manage.Litegix.io/backup/dashboard"
                >Backup Instance</a
              >
              for <strong>Web Application</strong> and
              <strong>Database</strong> will be <strong>DELETED</strong> after
              server transfer process completed. Every backup files under the
              backup instance will moved to
              <a href="https://manage.Litegix.io/backup/files"
                >Backup Archive</a
              >
              section.
            </p>
            <p>
              If you have any Web Application that use Let's Encrypt
              <strong>dns-01</strong> method under this server, you need to
              remove the SSL since the dns-01 method is bound to your Third
              Party API Key. You can reattempt dns-01 authorization again once
              the server has been transferred to the new owner.
            </p>
            <p>
              If you have any Web Application using
              <strong>Atomic Deployment</strong>, you need to remove these Web
              Applications from Atomic Deployment.
            </p>
            <p>
              If this server is shared with your team member, your team member
              will also lose the ability to manage this server.
            </p>
          </div>
        </h3>
      </div>
      <div class="card-body py-0 pb-10">
        <form>
          <b-form-group label="Email"
            ><b-form-input
              name="email"
              placeholder="Email address of a registered user"
            ></b-form-input
          ></b-form-group>

          <button type="submit" class="btn btn-primary btn-block">
            Initiate Server Transfer
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KTServerTransfer",
  data() {
    return {};
  }
};
</script>
