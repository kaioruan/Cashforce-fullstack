<script setup></script>

<template>
  <section class="logo-container">
    <img src="../images/menu-hero.png" alt="cashforce icon" />
    <ul>
      <li>
        <img src="../images/hands.png" alt="hands icon" class="hand-icon" />
        Notas fiscais
      </li>
    </ul>
  </section>
  <header class="header-container"></header>
</template>

<style scoped>
.header-container {
  width: 100%;
  height: 64px;
}
.logo-container {
  max-width: 288px;
  height: 900px;
  float: left;
  left: 0;
  top: 0;
}

ul {
  list-style: none;
  display: flex;
  margin: 25px 25px;
}

ul li {
  text-align: center;
  color: rgb(0, 173, 140);
  font-weight: bold;
  font-size: 14px;
}

.hand-icon {
  margin: 0;
}
</style>
