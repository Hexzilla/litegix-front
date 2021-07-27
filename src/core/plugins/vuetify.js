import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    defaultTheme: 'light',
    // theme: {
    //   light: {
    //     background: '#cccccc',
    //     primary: '#3f51b5',
    //     secondary: '#b0bec5',
    //     accent: '#8c9eff',
    //     error: '#b71c1c'
    //   },
    //   dark: {
    //     background: '#555555',
    //     primary: '#3f51b5',
    //     secondary: '#b0bec5',
    //     accent: '#8c9eff',
    //     error: '#b71c1c'
    //   }
    // }
    theme: {
      themes: {
        light: {
          primary: colors.lightBlue,
          secondary: colors.grey.darken1,
          accent: colors.pink.darken1,
          error: colors.red.accent3,
          background: colors.indigo.lighten5,
          info: colors.teal.darken1,
        },
        dark: {
          primary: colors.blue.darken4,
          background: colors.indigo.base,
          info: colors.teal.lighten1,
        },
      },
    }
  }
});
