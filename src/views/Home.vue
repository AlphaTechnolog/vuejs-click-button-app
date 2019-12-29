<template>
  
<div>
  <div id="title">
    <Title/>
  </div>
  <div id="contador">
    <Contador/>
  </div>
</div>

</template>

<script type="text/javascript">
  
import Title from '@/components/Title.vue';
import Contador from '@/components/Contador.vue';

export default {
  name: 'Home',
  components: {
    Title,
    Contador
  }
}
  
</script>

<style lang="scss">

$global-font: 'arial', 'calibri', sans-serif;
$lightgrey: rgb(219, 219, 219);

*, *:before, *:after {
  text-align: center;
}

body {
  h1, h2, h3, h4, h5, h6 {
    font-family: $global-font;
    text-shadow: 3px 3px 3px $lightgrey;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 30px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 10px;
  }
}

</style>
