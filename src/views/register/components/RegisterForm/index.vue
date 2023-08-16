<template>
  <div>
    <el-form
      ref="form"
      :model="registerFrom"
      :rules="rules"
      label-width="80px"
      label-position="top"
      :inline="false"
      size="large"
    >
      <el-form-item label="Email">
        <el-input
          v-model="registerFrom.email"
          placeholder="Enter your email"
          class="!text-[16px]"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="registerFrom.password"
          type="password"
          show-password
          class="!text-[16px]"
          placeholder="Enter your password"
        ></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password">
        <el-input
          v-model="registerFrom.cPassword"
          type="password"
          show-password
          class="!text-[16px]"
          placeholder="Confirm your password"
        ></el-input>
      </el-form-item>
      <el-form-item label="Verify Code">
        <el-input
          v-model="registerFrom.password"
          type="password"
          show-password
          class="!text-[16px]"
          placeholder="Enter Verify Code"
        ></el-input>
      </el-form-item>
      <div class="flex justify-end mb-4">
        <router-link to="/">Forgot Password</router-link>
      </div>
    </el-form>
    <el-button
      type="primary"
      size="default"
      class="w-full !h-[54px]"
      @click="isSendEmail ? login() : sendEmail()"
    >
      {{ isSendEmail ? 'Sign in' : 'Send verify code' }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
interface Register {
  email: string
  password: string
  cPassword: string
  verifyCode: string
}

const registerFrom = reactive<Register>({
  email: '',
  password: '',
  cPassword: '',
  verifyCode: ''
})

const rules = reactive<FormRules<Register>>({
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input the password', trigger: 'blur' }
  ]
})

const isSendEmail = ref<boolean>(false)

const sendEmail = () => {}
const login = () => {}
</script>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  height: 55px;
  line-height: 55px;
}
</style>
