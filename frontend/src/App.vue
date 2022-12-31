<script setup></script>

<template>
  <header>
    <div class="flex-container">
      <img src="./images/menu-hero.png" />
    </div>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  width: 288px;
  height: 900px;
  left: 0px;
  top: 0px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 288px;
  height: 144px;
  left: 0px;
  top: 0px;
}
.flex-container img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 288px;
  height: 64px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
