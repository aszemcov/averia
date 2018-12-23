<template>
  <div id="app">

    <div class="btn btn-outline-info mb-5 mt-5" v-pop="boldText">Жирный текст по ховеру</div>
    <br>

    <div class="btn btn-outline-info mb-5 mt-5" v-pop.left.click="funcText">Текст из функции по клику</div>
    <br>

    <div class="btn btn-outline-info mt-5" v-pop.right.product="id">Глобальный компонент по ховеру</div>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'

  export default {
    name: 'app',
    data: () => ({
      boldText: `<b>Жирный текст</b>`,
      id: 101
    }),
    methods: {
      funcText() {
        return `<i>Function return string</i>`
      }
    }
  }
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
.popper {
  position: absolute;
  background: #FFC107;
  color: black;
  width: 150px;
  border-radius: 3px;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
