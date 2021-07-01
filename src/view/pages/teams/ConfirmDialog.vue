<template>
  <div
    class="swal2-container swal2-top swal2-fade swal2-shown"
    style="overflow-y: auto; display: none"
    id="delConfirm"
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="swal2-title"
      aria-describedby="swal2-content"
      class="swal2-modal rc-swal swal2-show"
      tabindex="-1"
      style="
        width: 600px;
        padding: 30px;
        background: rgb(255, 255, 255);
        display: block;
      "
    >
      <ul class="swal2-progresssteps" style="display: none"></ul>
      <div class="swal2-icon swal2-error" style="display: none">
        <span class="swal2-x-mark" data-nsfw-filter-status="swf"
          ><span
            class="swal2-x-mark-line-left"
            data-nsfw-filter-status="swf"
          ></span
          ><span
            class="swal2-x-mark-line-right"
            data-nsfw-filter-status="swf"
          ></span
        ></span>
      </div>
      <div class="swal2-icon swal2-question" style="display: none">?</div>
      <div class="swal2-icon swal2-warning" style="display: block">!</div>
      <div class="swal2-icon swal2-info" style="display: none">i</div>
      <div class="swal2-icon swal2-success" style="display: none">
        <div
          class="swal2-success-circular-line-left"
          style="background: rgb(255, 255, 255)"
        ></div>
        <span
          class="swal2-success-line-tip"
          data-nsfw-filter-status="swf"
        ></span>
        <span
          class="swal2-success-line-long"
          data-nsfw-filter-status="swf"
        ></span>
        <div class="swal2-success-ring"></div>
        <div
          class="swal2-success-fix"
          style="background: rgb(255, 255, 255)"
        ></div>
        <div
          class="swal2-success-circular-line-right"
          style="background: rgb(255, 255, 255)"
        ></div>
      </div>
      <img class="swal2-image" style="display: none" />
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
      <div class="swal2-buttonswrapper" style="display: block">
        <button
          type="button"
          class="swal2-cancel btn btn-default"
          aria-label=""
          style="display: inline-block"
        >
          Cancel</button
        ><button
          type="button"
          class="swal2-confirm btn btn-danger"
          aria-label=""
        >
          Yes, Delete it
        </button>
      </div>
      <button
        type="button"
        class="swal2-close"
        aria-label="Close this dialog"
        style="display: block"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmDialog"
};
</script>
