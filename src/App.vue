<template>
  <div class="site-wrapper page-home" style="height: auto;">
    <header>
      <div class="container">
        <img src="static/img/onelife_header_logo.png" class="header-logo">
      </div>
      <h1>
        <div class="container">
          ADD FAMILY ONLINE NOW
        </div>
      </h1>
    </header>

    <main>
      <div class="main-background"></div>
      <div class="container">
        <div class="main-content">
          <router-view></router-view>

        </div>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="column-left">

          <img src="static/img/onelife_footer_logo.png" class="footer-logo">
          <br>
          <a href="#">OneLifeFitness.com</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">I Need Assistance</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">Club Locations</a>
        </div>
        <div class="column-right">
          <p>
            Limited time online offer for new <a href="#">Onelife Fitness</a> members.<br>
            © 2017 Onelife Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
export default {
  name: 'app'
}
</script>

<style>
  .help {font-size: 12px;margin-left: 125px;}
  .is-danger {color:red}
  @media (max-width: 850px)
  {
    .help {margin-left: 29%;}
  }
  @media (max-width: 550px)
  {
    .help {margin-left: 0;}
  }
</style>
