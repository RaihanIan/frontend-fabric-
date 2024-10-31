<template>
  <div>
    <!-- Menampilkan komponen LoginPage -->
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "../components/LoginPage.vue";

export default {
  name: 'LoginPageView',
  components: {
    LoginPage, // Register komponen LoginPage
  },
  methods: {
    handleSubmit() {
      // Logic untuk email submission
      console.log("Email submitted");
    },
    handleLogin() {
      // Logic untuk login submission
      console.log("Login submitted");
    }
  }
};
</script>
