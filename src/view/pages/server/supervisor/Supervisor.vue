<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Supervisor Jobs</span>
        <span
        class="text-muted mt-3 font-weight-bold font-size-sm"
        data-nsfw-filter-status="swf"
        >Monitor and control processes on your server.</span
      >
      </h3>
      <div class="card-toolbar">
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
        
        <b-link to="supervisor/create">
              <a class="btn btn-success">Create</a>
            </b-link>
      </div>
      
    </div>
    <div class="card-body py-10">
    </div>
  </div>
</template>



<style scoped src="@/assets/styles/server.css"></style>

<script>
    export default {
        data() {
            return {
             
            };
        },
    };
</script>