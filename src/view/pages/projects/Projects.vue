<template>
  <div class="row">
    <div class="col-md-12">
      <b-card-group deck>
        <b-link to="/Projects/create">
          <b-card
            bg-variant="primary"
            text-variant="white"
            img-src="media/logos/logo-letter-3.png"
            align="center"
          >
            <b-card-text>Create A Project</b-card-text>
          </b-card>
        </b-link>
        <b-link to="/create">
          <b-card
            bg-variant="primary"
            text-variant="white"
            img-src="media/logos/logo-letter-3.png"
            img-
            align="center"
          >
            <b-card-text>Create A Project</b-card-text>
          </b-card>
        </b-link>

        <b-link to="/create">
          <b-card
            bg-variant="primary"
            text-variant="white"
            img-src="media/logos/logo-letter-3.png"
            img-
            align="center"
          >
            <b-card-text>Create A Project</b-card-text>
          </b-card>
        </b-link>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      html1: `<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>`,

      html2: `<div>
  <div>
    <b-card-group deck>
      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card header="Default" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>`,

      html3: `<div>
  <div>
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="success" header="Success" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="info" header="Info" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="dark" header="Dark" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>`,

      html4: `<div>
  <b-card title="Card title" sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the
      <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text
      >A second paragraph of text in the card.</b-card-text
    >

    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</div>`,

      html5: `<div>
<b-card-group deck>
  <b-card
    header="featured"
    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    title="Title"
  >
    <b-card-text>Header and footers using props.</b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

  <b-card title="Title" header-tag="header" footer-tag="footer">
    <template v-slot:header>
      <h6 class="mb-0">Header Slot</h6>
    </template>
    <b-card-text>Header and footers using slots.</b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
    <template v-slot:footer>
      <em>Footer Slot</em>
    </template>
  </b-card>
</b-card-group>
</div>`,

      html6: `<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural
            lead-in to additional content. This content is a little
            bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>`,

      html7: `<div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk
      of the card's content.
    </b-card-text>
  </b-card>
</div>`
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Project" }]);
  }
};
</script>
