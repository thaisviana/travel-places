<template>
  <div>
     <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#"> <router-link tag="h3" :to="{ name: 'main'}">Home</router-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>
<style >
body{
  background: #eee;
  min-width: 100vh;
}
</style>

