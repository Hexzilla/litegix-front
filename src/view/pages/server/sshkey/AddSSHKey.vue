<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Add SSH Key</span>
      </h3>
    </div>
    <div class="card-body py-0 pb-10">
      <b-form>
        <b-form-group label="Label">
          <b-form-input
            name="label"
            placeholder="Any label for you to recognize this public key"
          ></b-form-input>
        </b-form-group>
        <div class="form-group">
          <label class="control-label">User</label>
          <b-form-select
            size="lg"
            v-model="system_user"
            :options="systemUsers"
            text-field="name"
          ></b-form-select>
        </div>
        <div class="form-group">
          <label class="control-label">Public Key</label>
          <b-form-textarea
            name="public_key"
            v-model="public_key"
            placeholder="sss-rsa|ecdsa-sha2-nistp(256|384|512)|ssh-ed25519 xxx..."
            rows="6"
            max-rows="10"
          ></b-form-textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Add
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_SYSTEM_USERS } from "@/core/services/store/systemuser.module";

export default {
  data() {
    return {
      system_user: "",
      public_key: ""
    };
  },
  computed: {
    ...mapGetters(["systemUsers"])
  },
  mounted() {
    this.serverId = this.$parent.serverId;
    this.$store.dispatch(GET_SYSTEM_USERS, this.serverId).then(data => {
      console.log(data);
      console.log("systemUsers", this.systemUsers);
    });
  }
};
</script>
