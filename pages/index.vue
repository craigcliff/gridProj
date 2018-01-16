<template>
  <section class="container">
    <div class="row">
      <div class = "red col-1-of-2">RED </div>
      <div class =" blue col-1-of-2">BLUE </div>
    </div>

    <div class="row">
      <div class = "red col-1-of-3">RED </div>
      <div class =" blue col-1-of-3">BLUE </div>
      <div class =" red col-1-of-3">RED </div>
    
    </div>

    <div class="row">
      <div class = "red col-1-of-4">RED </div>
      <div class =" blue col-1-of-4">BLUE </div>
      <div class =" red col-1-of-4">RED </div>
      <div class =" red col-1-of-4">BLUE </div>
    </div>

    <div class="row">
      <div class = "red col-1-of-3">RED </div>
      <div class =" blue col-2-of-3">BLUE </div>
    </div>

    <div class="row">
      <div class = "red col-3-of-4">RED </div>
      <div class =" blue col-1-of-4">BLUE </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang = "scss">


.red{
  background-color: $color-primary;
 

}

.blue{
background-color: $color-secondary-light;


}

</style>
