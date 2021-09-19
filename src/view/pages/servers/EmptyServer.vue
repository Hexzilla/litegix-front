<template>
  <v-card class="w-400px mt-20 py-10 px-20 mx-auto">
    <div class="text-center">
      <div class="symbol symbol-60 symbol-circle symbol-xl-90">
        <div
          class="symbol-label"
          :style="{
            backgroundImage: `url('media/logos/logo-letter-3.png')`
          }"
        ></div>
      </div>

      <h4 class="font-weight-bold my-2">You don't have any server yet</h4>
      <div class="text-muted mb-2">
        Currently you do not own any server. Litegix makes this real easy for
        you to do.
      </div>
      <b-link to="/servers/create">
        <b-button size="lg" class="my-3 my-sm-0 ml-auto" variant="primary"
          >Create Server</b-button
        >
      </b-link>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Empty"
};
</script>
