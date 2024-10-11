<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const user = ()=>{
  router.push('/user')
}

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
        <div class="text">
          <p><b>Iltimos, davom etish uchun kirish turini tanglang!</b></p>
        </div>
        <div class="acc-select">
          <div class="acc-select__user" @click="user">
            <svg xmlns="http://www.w3.org/2000/svg" height="72" width="80" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path fill="#8a8a8a" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
            </svg> 
            <p>Foydalanuvchi</p>         
          </div>
          <div class="acc-select__user" @click="router.push('/agent')">
            <svg xmlns="http://www.w3.org/2000/svg" height="72" width="80" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path fill="#8a8a8a" d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
            </svg>
            <p>Agent</p>
          </div>
          <div class="acc-select__user" @click="router.push('/owner')">
            <svg xmlns="http://www.w3.org/2000/svg" height="72" width="80" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path fill="#8a8a8a" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
            <p>Owner</p>
          </div>
          <div class="acc-select__user" @click="router.push('/driver')">
            <svg xmlns="http://www.w3.org/2000/svg" height="72" width="80" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path fill="#8a8a8a" d="M64 32C28.7 32 0 60.7 0 96L0 304l0 80 0 16c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16L416 384l33.6 0c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16l1.6 0c17.7 0 32-14.3 32-32l0-64 0-16 0-10.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5L480 144l0-48c0-35.3-28.7-64-64-64L64 32zM585 256l-105 0 0-64 48.8 0c2.4 0 4.7 1.1 6.2 2.9L585 256zM528 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
            <p>Haydovchi</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .container{
    width: 1024px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* animation: bgColor 5s infinite; */
    background: linear-gradient(#71f0ad, #ffc);
    /* background: linear-gradient(to bottom, #3c4c9a, #202a6c, #0b2163, #202a6c, #3c4c9a); */
    /* background: linear-gradient(to bottom, #70f090, #18ef11c1, #18e93e, #59ed68, #70f090); */
  }

  .row{
    max-width: 1024px;
  }

  .text{
    text-align: center;
    font-size: 2rem;
  }

  .acc-select{
    width: 700px;
    height: 700px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: linear-gradient(#ffc,#71f0ad );
    /*80ackground: linear-gradient(#eee, #ffc); */
    box-shadow: 0px 0px 50px rgba(0, 0, 0, .8);
  }

  .acc-select__user{
    width: 205px;
    height: 205px;
    padding: 20px;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
    transition: all .4s ease;
  }

  .acc-select__user:hover{
    width: 230px;
    height: 230px;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .8);
    cursor: pointer;
  }

/* @keyframes bgColor {
  0%{
    background: linear-gradient(#71f0ad, #ffc);
  }
  50%{
    background: linear-gradient(#ffc,#71f0ad );
  }
  100%{
    background: linear-gradient(#71f0ad, #ffc);
  }
} */

@media (max-width:768px) {
  .container{
    width: 768px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
  }

  .row{
    max-width: 768px;
  }

  .acc-select{
    width: 680px;
    height: 680px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: linear-gradient(#ffc,#71f0ad );
    box-shadow: 0px 0px 50px rgba(0, 0, 0, .7);
  }

  .acc-select__user{
    width: 200px;
    height: 200px;
    padding: 20px;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
    transition: all .4s ease;
  }

  .acc-select__user:hover{
    width: 225px;
    height: 225px;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .8);
    cursor: pointer;
  }
}

@media (max-width:480px) {
  .container{
    width: 480px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
  }

  .row{
    max-width: 480px;
  }

  .acc-select{
    width: 420px;
    height: 420px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: linear-gradient(#ffc,#71f0ad );
    box-shadow: 0px 0px 50px rgba(0, 0, 0, .8);
  }

  .acc-select__user{
    width: 135px;
    height: 135px;
    padding: 20px;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
    transition: all .4s ease;
  }

  .acc-select__user:hover{
    width: 150px;
    height: 150px;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .8);
    cursor: pointer;
  }
}
</style>
