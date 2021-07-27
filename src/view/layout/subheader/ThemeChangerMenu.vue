<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30" color="primary">mdi-palette</v-icon>
      </v-btn>
    </template>
    <v-card>
      <!--      menu content start -->
      <template>
        <v-list-item>
          <v-list-item-content
            ><v-list-item-title class="font-weight-bold">
              Dark Mode</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action
            ><v-switch v-model="$vuetify.theme.dark" />
          </v-list-item-action>
        </v-list-item>
        <v-divider />
      </template>
      <!--      menu content end -->
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "ThemeChanger",
  data: () => ({
    menu: false,
  }),
  methods: {},
};
</script>