<template>
  
<div>
  <div class="content">
    <h1>{{title}}</h1>
    <p>
      {{title}} es una pequeño minijuego que te permitira ver cuantos click le podrás dar al botoncito verde, es un minijuego que decidí hacer en vue.js, solo por diversión pués ya tenía tiempo sin realizar una aplicación en vue.js, y ahora decidí volver a intentarlo para poder ver que tanto recuerdo, y no me fue tan mal, porque había eliminado el npm y decidí volver a instalar la última versión de npm y node.js, por tanto como ya se podrían imaginar, perdí el vue cli, y tuve que volver a instalarlo, y fue una experiencia totalmente de 0. Gracias por su atención.
    </p>
    <p class="att">
      Att: AlphaTechnology.
    </p>
  </div>
</div>

</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      title: 'Contador de clicks'
    }
  }
}

</script>

<style lang="scss" scoped>

body {
  background: rgb(0, 0, 0);

  h1 {
    font-family: 'arial', sans-serif;
    font-size: 60px;
    text-shadow: 3px 3px 3px lightgrey;
  }

  p {
    font-family: 'calibri', 'arial', sans-serif;
    font-size: 18px;

    &.att {
      margin-top: 25%;
      text-align: right;
      font-weight: bold;
    }
  }

  div {
    &.content {
      padding: 1em;
      text-align: center;
      margin-top: 3rem;
      background: #fff;
    }
  }
}

</style>
