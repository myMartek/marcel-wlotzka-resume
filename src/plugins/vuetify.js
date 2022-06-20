import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import de from 'vuetify/lib/locale/de';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0D47A1',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { de },
      current: 'de',
    },
});
