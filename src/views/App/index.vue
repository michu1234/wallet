<template lang="pug">
  div#app router-view
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$store.dispatch('runIt');
    }
  }

</script>

<style lang="sass" src="styles/application.sass"></style>

