<template>
  <div id="app" class="main-layout">
    <Nuxt :key="$route.fullPath"></Nuxt>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  async beforeCreate() {
    if (process.client) {
    //   this.$i18n.setLocale(this.language);
    }
  },
  async created() {
  },
  methods: {
    
  },
};
</script>

<style rel="stylesheet" scoped>

</style>
