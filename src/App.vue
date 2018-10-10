<template>
  <div id="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Find a player
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Tournaments
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>
      </div>

      <a class="navbar-item">
        Sponsors
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Dashboard
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>
      </div>

      <a class="navbar-item">
        Marketplace
      </a>

      <div class="navbar-item johndoel">
        JohnDoel123  
      </div>

      <div class="navbar-item">
        <icon class="icon" name="store"/>
        <icon class="icon" name="comment"/>
        <icon class="icon" name="bell"/>
        <icon class="icon" name="cog"/>
        
      </div>

    </div>

  </div>
</nav>
  
  <!-- basic -->


  </div>


</template>

<script>

import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'nav',
  components: {
    Icon
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
/* ============ NAVBAR ================== */
  .navbar{
    background-color: #1b1b1b;
  }

  .navbar-dropdown .navbar-item{
    color: #333333;
  }

  a.navbar-item, a.navbar-link{
    color: #ffffff;
    text-transform: uppercase;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .johndoel{
    color: #ffffff;
    font-family: Dosis;
    font-size: 12px;
  }

  .icon{
    margin-left: 10px;
    font-size: 50%;
  }


</style>
