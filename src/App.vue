<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">App</router-link>
      <router-link to="/about">Información</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

$navbar-width: 100%;
$navbar-color: rgb(0, 0, 0);
$navbar-text-color: #fff;
$a-navbar-font-family: 'arial', sans-serif;

body {
  padding: 0px;
  margin: 0px;

  #nav {
    max-width: $navbar-width;
    background-color: $navbar-color;
    padding: 1rem;
    color: $navbar-text-color;
    text-align: left;

    a {
      font-weight: bold;
      padding: 1rem;
      color: #fff;
      text-decoration: none;
      font-family: $a-navbar-font-family;

      &.router-link-exact-active {
        background: rgb(0, 185, 0);
      }

      &:hover {
        background: rgb(0, 167, 0);
      }
    }
  }
}
</style>
