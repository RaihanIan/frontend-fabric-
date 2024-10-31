<template>
  <div class="flex overflow-hidden flex-col items-end px-20 pt-10 pb-32 bg-white rounded-xl max-md:px-5 max-md:pb-24">
    <nav class="flex gap-5 justify-between py-0.5 mr-28 max-w-full text-xl font-bold text-black w-[202px] max-md:mr-2.5">
      <a href="#" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign in</a>
      <a href="#" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign up</a>
    </nav>
    <main class="mt-36 w-full max-w-[1097px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <section class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h1 class="text-6xl font-extrabold text-red-600 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Welcome to <span class="text-orange-500">Finding</span> <span class="text-black">Fabric</span>
          </h1>
        </section>
        <section class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form @submit.prevent="handleSubmit" class="mt-20 w-full max-md:mt-10">
            <label for="email" class="sr-only">Enter your email address</label>
            <input id="email" type="email" class="px-4 py-6 w-full text-sm font-extralight text-black bg-pink-50 rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5" placeholder="Enter your email address" required>
          </form>
        </section>
      </div>
    </main>
    <section class="z-10 mt-0 w-full max-w-[1097px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          <div class="flex z-10 flex-col self-stretch my-auto mr-0 text-black max-md:mt-10">
            <p class="text-xl font-light max-md:ml-2.5">"Kain Tepat, Pilihan Cermat."</p>
            <button class="px-9 py-3.5 mt-10 text-2xl font-extrabold bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Explore our website
            </button>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b737e1b0b1e72129b38d1b4a2977759bc61696df4c1bfd25f0dc0512bcf9e32?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Finding Fabric visual representation" class="object-contain w-full aspect-square max-md:max-w-full">
        </div>
        <div class="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col mt-44 w-full text-sm text-black max-md:mt-10">
            <form @submit.prevent="handleLogin">
              <div class="mb-5">
                <label for="password" class="sr-only">Password</label>
                <input id="password" type="password" class="px-4 py-6 max-w-full font-light whitespace-nowrap bg-pink-50 rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[393px] max-md:pr-5" placeholder="Password" required>
              </div>
              <div class="flex gap-10 mt-5 w-full font-bold max-md:mr-2.5">
                <div class="flex flex-1 gap-3.5 items-center">
                  <input type="checkbox" id="remember-me" class="w-6 h-6 bg-pink-50 rounded-sm shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  <label for="remember-me">Remember me</label>
                </div>
                <a href="#" class="focus:outline-none focus:underline">Forgot Password?</a>
              </div>
              <button type="submit" class="px-16 pt-3 pb-7 mt-9 max-w-full text-3xl font-extrabold bg-orange-500 rounded-xl w-[393px] max-md:px-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "../components/LoginPage.vue"; // Perbaiki path jika perlu
export default {
  name: 'LoginPageView',
  methods: {
    handleSubmit() {
      // Handle email submission
    },
    handleLogin() {
      // Handle login submission
    }
  }
}
</script>
