<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const submit = () =>{
    localStorage.setItem('introShown', true)
    router.push('/about')
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <form @submit.prevent="submit">
            <div class="btn">
                <button type="submit">Boshlash</button>
            </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .container{
    width: 768px;
    height: 100vh;
    height: var(--vh, 100vh);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('../assets/img/intro-main.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .row{
    max-width: 768px;
  }

  .btn{
    text-align: center;
  }

  button{
    width: 520px;
    height: 80px;
    margin: 20px 0px;
    font-size: 1.7rem;
    color: #fff;
    border: 1px solid #132ce5;
    border-radius: .7rem;
    background-color: #132ce5;
    cursor: pointer;
  }

@media (max-width:468px) {
    .container{
    width: 468px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('../assets/img/intro-main.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .row{
    max-width: 468px;
  }

  .btn{
    text-align: center;
  }

  button{
    width: 320px;
    height: 60px;
    margin: 20px 0px;
    font-size: 1.7rem;
    color: #fff;
    border: 1px solid #132ce5;
    border-radius: .7rem;
    background-color: #132ce5;
    cursor: pointer;
  }
}
</style>