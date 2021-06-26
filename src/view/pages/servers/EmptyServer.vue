<template>
  <div class="card card-custom card-stretch gutter-b">
    <div class="card-body d-flex flex-column">
      <div class="pt-5">
        <h3 class="text-center card-title font-weight-bolder">
          You don't have any servers yet
        </h3>
        <p class="text-center font-weight-normal font-size-lg pb-7">
          Currently you do not own any servers. <br />
          Luckily Litegix makes this real easy for you to do.
        </p>
        <router-link to="/servers/create" v-slot="{ href, navigate }">
          <a
            :href="href"
            @click="navigate"
            class="btn btn-primary btn-shadow-hover font-weight-bolder w-100 py-3"
            >Create Server</a
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Empty"
};
</script>
