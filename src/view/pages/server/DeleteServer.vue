<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Delete Your Server</span
        ><span class="text-muted mt-3 font-size-sm">
          <p>
            Please think carefully before deleting your server. All data will be
            deleted and you will not be able to add your server back without a
            full reformat. This action cannot be undone.
          </p>
          <p>Complete all field below to delete your server.</p>
        </span>
      </h3>
    </div>
    <div class="card-body pb-10 pt-0">
      <b-form>
        <b-form-group label="Type YES"
          ><b-form-input
            name="typeyes"
            placeholder="Type Yes here to delete this server form Litegix"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Certify To Delete Server">
          <b-form-checkbox size="lg" name="certify"
            >I certify that I want to delete my server from Litegix and data
            will not be returnable again.</b-form-checkbox
          >
        </b-form-group>
        <b-form-group label="Proceed to Deletion">
          <b-form-checkbox size="lg" name="certify"
            >Proceed to deletion</b-form-checkbox
          >
        </b-form-group>
        <b-form-group label="Last Warning">
          <b-form-checkbox size="lg" name="certify"
            >I understand that what I want.</b-form-checkbox
          >
        </b-form-group>
        <button type="submit" class="btn btn-danger btn-block">
          Delete Server
        </button>
      </b-form>
    </div>
  </div>
</template>
