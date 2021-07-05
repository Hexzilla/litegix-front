<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Server Details</h4>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="name" class="control-label">Server Name </label>

            <input
              type="text"
              name="name"
              placeholder=""
              class="form-control input-lg"
            />
          </div>
          <div class="form-group">
            <label for="provider" class="control-label">Provider </label>

            <input
              type="text"
              name="provider"
              placeholder=""
              class="form-control input-lg"
            />
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Save </span></span>
          </button>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Transfer Server</h4>
        <p>
          You can use this feature to transfer your server to another account.
          Transferring this server to new owner will remove
          <strong>Slack Webhook URL</strong>,
          <strong>Telegram Notification</strong> and
          <strong>Health Notification</strong> settings. Once you have requested
          to transfer your server, the particular account must accept invitation
          to receive your server. Transferred server will only be able to
          transfer to another account again after <strong>15 days</strong>.
        </p>
        <p>
          Please be advice that your
          <a href="https://manage.runcloud.io/backup/dashboard"
            >Backup Instance</a
          >
          for <strong>Web Application</strong> and
          <strong>Database</strong> will be <strong>DELETED</strong> after
          server transfer process completed. Every backup files under the backup
          instance will moved to
          <a href="https://manage.runcloud.io/backup/files">Backup Archive</a>
          section.
        </p>
        <p>
          If you have any Web Application that use Let's Encrypt
          <strong>dns-01</strong> method under this server, you need to remove
          the SSL since the dns-01 method is bound to your Third Party API Key.
          You can reattempt dns-01 authorization again once the server has been
          transferred to the new owner.
        </p>
        <p>
          If you have any Web Application using
          <strong>Atomic Deployment</strong>, you need to remove these Web
          Applications from Atomic Deployment.
        </p>
        <p>
          If this server is shared with your team member, your team member will
          also lose the ability to manage this server.
        </p>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="email" class="control-label">Email </label>

            <input
              type="email"
              name="email"
              placeholder="Email address of a registered user"
              class="form-control input-lg"
            />
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Initiate Server Transfer </span></span>
          </button>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Change IP Address</h4>
        <p>
          If your server's IP Address has been changed manually or
          automatically, we are not able to serve your server with the new IP
          Address due to technical limitation. If you wanted to change your IP
          Address, fill in the new IP Address for this server and wait for the
          next instruction.
        </p>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="ipAddress" class="control-label">IP Address </label>

            <input
              type="text"
              name="ipAddress"
              placeholder="Your server's new IP Address"
              class="form-control input-lg"
            />
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Update IP Address </span></span>
          </button>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>SSH Config</h4>
        <p>
          Please ensure an SSH Key is added if you want to enable passwordless
          login.
        </p>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label class="control-label">Passwordless Login Only</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="passwordlessLogin"
                name="passwordlessLogin"
                class="styled"
              />
              <label for="passwordlessLogin">Passwordless Login Only</label>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">Prevent root login</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="preventRootLogin"
                name="preventRootLogin"
                class="styled"
              />
              <label for="preventRootLogin">Prevent root login</label>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">UseDNS</label>

            <div class="checkbox checkbox-primary">
              <input type="checkbox" id="useDns" name="useDns" class="styled" />
              <label for="useDns">UseDNS</label>
            </div>
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Save </span></span>
          </button>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Auto Update</h4>
        <p>
          Your server is set to automatically update to latest version for all
          RunCloud packages. We do recommend enabling Security Update.
        </p>
      </div>
      <div class="panel-body">
        <div class="alert alert-warning">
          By enabling 3rd Party Software Update, you will risk breaking your
          server. You shouldn't enable this, unless you know what you are doing.
        </div>
        <form>
          <div class="form-group">
            <label class="control-label">3rd Party Software Update</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="softwareUpdate"
                name="softwareUpdate"
                class="styled"
              />
              <label for="softwareUpdate">3rd Party Software Update</label>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">Security Update</label>

            <div class="checkbox checkbox-primary">
              <input
                type="checkbox"
                id="securityUpdate"
                name="securityUpdate"
                class="styled"
              />
              <label for="securityUpdate">Security Update</label>
            </div>
          </div>
          <button type="submit" class="btn btn-base btn-block">
            <span><span> Save </span></span>
          </button>
        </form>
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
      
    };
  },
};
</script>