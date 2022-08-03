<template>
  <div id="app">
    <h1>Gini Form Task</h1>
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 400px;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}
</style>
