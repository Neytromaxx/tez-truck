<script setup>
// import IntroView from "./IntroView.vue";
import { onMounted, onBeforeUnmount } from 'vue';

// Adjust the --vh property to reflect the actual viewport height
onMounted(() => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(`Viewport height set to ${vh * 100}px`); // Test log
  };

  setVh(); // Set on page load
  window.addEventListener('resize', setVh); // Update on resize

  // Clean up the event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('resize', setVh);
  });
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <h1>This is a Home page</h1>
        <!-- <intro-view></intro-view> -->
      </div>
    </div>
  </main>
</template>

<style scoped>
  .container{
    width: 768px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    border: 1px solid red;
  }

  .row{
    max-width: 768px;
  }

</style>
