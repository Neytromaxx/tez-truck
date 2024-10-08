<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const images = [
  {
    src: new URL('../assets/img/intro-about1.png', import.meta.url).href,
    title: 'Yuk mashinasini buyurtma qiling',
    des: '3 oddiy qadamda mavjud yuk mashinalarini qidiring va buyurtma qiling!'
  },
  {
    src: new URL('../assets/img/intro-about2.png', import.meta.url).href,
    title: 'Yuk mashinasining jo\'natilishi',
    des: 'Sizning jo\'natmangiz ayni damda qayerda harakatlanayotganini bilib oling. Haydovchidan jonli yangilanishlar!'
  },
  {
    src: new URL('../assets/img/intro-about3.png', import.meta.url).href,
    title: '24/7 qo\'llab-quvvatlash bilan himoyalangan',
    des: 'Sizning jo\'natishingiz 24 soatlik faol qo\'llab-quvvatlash jamoamiz tomonidan himoyalangan. Yuk mashinalaringizni buyurtma qiling va dam oling!'
  }
  ];

  const currentIndex = ref(0);
  const currentImg = ref(images[currentIndex.value])
  let interval = null

  const nextImage = () =>{
    currentIndex.value = (currentIndex.value + 1) % images.length
    currentImg.value = images[currentIndex.value]

    if (currentIndex.value === images.length - 1) {
      localStorage.setItem('aboutShown', 'true')
      router.push('/home')
    }
  }

onMounted(() => {
  interval = setInterval(nextImage, 7000) // Har 7 sekundda keyingi rasm
})

onUnmounted(() => {
  clearInterval(interval) 
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="img" @click="nextImage">
        <img :src="currentImg.src" alt="">
        <h1>{{ currentImg.title }}</h1>
        <p>{{ currentImg.des }}</p>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  .container{
    width: 768px;
    height: 100vh;
    height: var(--vh, 100vh);
    margin: 0 auto;
    background-color: #ffbb01;
  }

  .row{
    max-width: 768px;
  }

  .img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img{
    width: 350px;
    height: 350px;
    margin: 110px 0px 70px 0px;
    border: 1px solid #ffbb01;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
  }

  h1{
    width: 250px;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: #494242;
  }

  p{
    width: 320px;
    font-size: 1rem;
    line-height: 1rem;
  }

@media (max-width: 468px) {
  .container {
    width: 468px;
    height: 100vh;
  }

  .row{
    max-width: 468px;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  img{
    width: 250px;
    height: 250px;
    margin: 70px 0px;
  }
}
</style>
