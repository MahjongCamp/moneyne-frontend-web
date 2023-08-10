<template>
  <div class="flex h-screen">
    <div class="flex-1">
      <Logo class="w-[298px]" />
      <div>
        <div class="text-4xl font-bold">Login your account</div>
        <div>
          New to MoneyNe?
          <RouterLink to="/sign">Create an account</RouterLink>
        </div>
        <LoginForm :form="form" />
      </div>
    </div>
    <div class="w-[43%] p-8 flex items-center justify-center h-full">
      <img
        src="~assets/images/login-bg.jpg"
        alt="login-bg"
        class="object-cover h-full rounded-[4rem]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const form = {
  email: '',
  password: ''
}
</script>

<style scoped></style>
