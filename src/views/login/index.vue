<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col">
      <Logo class="w-[298px]" />
      <div
        class="flex-1 flex flex-col justify-center text-left w-[500px] mx-auto"
      >
        <div class="text-5xl font-bold leading-loose">Login your account</div>
        <div class="text-xl mb-8">
          New to MoneyNe?
          <RouterLink to="/sign">Create an account</RouterLink>
        </div>
        <LoginForm />
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

<script setup lang="ts"></script>

<style scoped></style>
