<template>
  
<div>
  <h2>{{$store.state.contador}} Clicks!</h2>
  <button @click="$store.commit('aumentarContador')">
    +
  </button>
</div>

</template>

<script type="text/javascript">

export default {
  name: 'Contador'
}

</script>

<style lang="scss" scoped>

body {
  button {
    background: rgba(200, 0, 0, 0);
    color: black;
    border: solid green 1px;
    border-radius: 100px;
    transition: all ease 0.5s;
    padding: 1em;
    padding-left: 3em;
    padding-right: 3em;
    font-size: 20px;

    &:hover {
      color: rgb(255, 255, 255);
      cursor: pointer;
      background: rgb(0, 128, 0);
    }

    &:active {
      color: #fff;
      cursor: pointer;
      background: rgb(0, 92, 0);
    }
  }
}

</style>
