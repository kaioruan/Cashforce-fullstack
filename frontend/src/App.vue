<script setup>
import Header from "./components/HeaderComponent.vue";
import Table from "./components/TableComponent.vue";
</script>

<template>
  <main>
    <Header class="headerComponent" />
    <Table class="tableComponent" />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  font-family: sans-serif;
}
main {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5rem 5rem 1fr;
  grid-template-areas:
    "a ."
    "a b"
    ". b";
}
.headerComponent {
  grid-area: a;
}
.tableComponent {
  grid-area: b;
}
</style>
