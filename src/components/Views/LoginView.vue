<template>
    <div class="flex overflow-hidden flex-col px-10 pt-10 pb-20 bg-[#FEF7F3] rounded-lg shadow-lg mt-10 pl-32 max-md:px-5 max-md:pb-20">
      
      <nav class="flex gap-5 justify-end w-full pr-10 text-lg font-semibold text-gray-700 mt-4">
        <a href="#" class="hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign in</a>
        <a href="#" class="hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign up</a>
      </nav>
      
      <main class="mt-10 w-full max-w-[1097px] max-md:mt-8 max-md:max-w-full flex">
        <!-- Teks Utama dan Gambar dalam Flex -->
        <section class="flex items-center w-full max-md:flex-col max-md:w-full">
          <div class="flex flex-col items-start">
            <h1 class="text-4xl font-bold text-red-600 max-md:text-3xl">Welcome to</h1>
            <h1 class="text-4xl font-bold text-orange-500 max-md:text-3xl">
              Finding <span class="text-black">Fabric</span>
            </h1>
            <p class="text-base font-light text-gray-600 mt-2">"Kain Tepat, Pilihan Cermat."</p>
  
            <!-- Tombol Explore dengan font lebih besar dan warna hitam -->
            <button class="px-6 py-2 mt-4 w-[250px] text-lg font-semibold text-black bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Explore our website
            </button>
          </div>
  
          <!-- Gambar Ilustrasi di Samping Teks -->
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b737e1b0b1e72129b38d1b4a2977759bc61696df4c1bfd25f0dc0512bcf9e32?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Finding Fabric visual representation" class="ml-6 w-[250px] h-auto max-md:mt-4 max-md:ml-0 max-md:w-[150px]" />
        </section>
  
        <!-- Formulir Login -->
        <section class="z-10 w-full max-w-[350px] bg-white p-6 rounded-lg shadow-md ml-6 flex-shrink-0 mt-8 max-md:mt-8">
          <form @submit.prevent="handleLogin" class="flex flex-col gap-3 text-sm">
            <input
              id="email"
              type="email"
              class="px-3 py-2 text-black bg-gray-50 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email address"
              required
            />
  
            <input
              id="password"
              type="password"
              class="px-3 py-2 text-black bg-gray-50 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Password"
              required
            />
  
            <div class="flex items-center justify-between">
              <label class="flex items-center text-sm text-gray-600">
                <input type="checkbox" id="remember-me" class="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                <span class="ml-2">Remember me</span>
              </label>
              <a href="#" class="text-sm text-orange-500 hover:underline">Forgot Password?</a>
            </div>
  
            <button type="submit" class="w-full py-2 mt-3 text-lg font-semibold text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              SIGN IN
            </button>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    methods: {
      handleLogin(event) {
        // Handle login submission
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #FEF7F3;
  }
  </style>
  
  
  
  