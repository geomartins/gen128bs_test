<template>
  <q-layout view="hhh LpR fFf">
    
    <q-page-container>
      <router-view />
    </q-page-container>

  
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      openURL(url);
    },
  },
};
</script>
