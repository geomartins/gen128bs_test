<template>
  <q-page>
    <nav-bar />

    <banner />

    <services />

    <contact />
    <app-footer></app-footer>
  </q-page>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Banner from "../components/Banner.vue";
import Services from "../components/Services.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "PageIndex",
  components: {
    NavBar,
    Banner,
    Services,
    Contact,
    "app-footer": Footer
  },
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      openURL(url);
    }
  }
};
</script>

<style></style>
