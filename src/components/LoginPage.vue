<template>
  <main class="flex flex-col items-center px-20 pt-10 pb-32 bg-white rounded-xl max-md:px-5 max-md:pb-24">
    <!-- Navbar -->
    <nav class="flex gap-5 justify-between py-0.5 text-xl font-bold text-black w-full max-md:mr-2.5">
      <a href="#" class="text-black">Sign in</a>
      <a href="#" class="text-black">Sign up</a>
    </nav>
    
    <!-- Welcome Section -->
    <section class="flex flex-col items-center mt-36 w-full max-w-[1097px] max-md:mt-10 max-md:max-w-full">
      <h1 class="text-6xl font-extrabold text-red-600 max-md:text-4xl">
        Welcome to <span class="text-orange-500">Finding</span> <span class="text-black">Fabric</span>
      </h1>
      <p class="mt-6 text-xl font-light text-black">"Kain Tepat, Pilihan Cermat."</p>
    </section>

    <!-- Form Section -->
    <section class="mt-12 w-full max-w-md">
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <!-- Email Input -->
        <div>
          <label for="email" class="block mb-1 text-sm font-bold text-gray-600">Enter your email address</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            class="w-full px-4 py-3 text-black bg-pink-50 border rounded-lg shadow-sm"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block mb-1 text-sm font-bold text-gray-600">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Password"
            class="w-full px-4 py-3 text-black bg-pink-50 border rounded-lg shadow-sm"
            required
          />
        </div>

        <!-- Remember Me Checkbox and Forgot Password Link -->
        <div class="flex items-center justify-between">
          <label class="flex items-center text-sm font-bold text-gray-700">
            <input type="checkbox" v-model="rememberMe" class="mr-2 rounded-sm bg-pink-50 shadow-sm" />
            Remember me
          </label>
          <a href="#" class="text-sm font-bold text-orange-500">Forgot Password?</a>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="w-full py-4 mt-4 text-2xl font-extrabold text-white bg-orange-500 rounded-lg">
          SIGN IN
        </button>
      </form>
    </section>

    <!-- Explore Button -->
    <section class="mt-12">
      <button class="px-8 py-4 text-2xl font-extrabold text-black bg-orange-500 rounded-lg">
        Explore our website
      </button>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const rememberMe = ref(false);

    const handleSubmit = () => {
      // Handle form submission
      console.log('Form submitted', { email: email.value, password: password.value, rememberMe: rememberMe.value });
    };

    return {
      email,
      password,
      rememberMe,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
/* Mengatur gaya tambahan khusus */
main {
  max-width: 600px;
  margin: auto;
}
</style>
