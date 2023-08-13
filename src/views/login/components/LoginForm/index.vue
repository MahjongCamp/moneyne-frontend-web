<template>
  <div>
    <el-form
      ref="form"
      :model="loginFrom"
      :rules="rules"
      label-width="80px"
      label-position="top"
      :inline="false"
      size="large"
    >
      <el-form-item label="Email">
        <el-input
          v-model="loginFrom.email"
          placeholder="Enter your email"
          class="!text-[16px]"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="loginFrom.password"
          type="password"
          show-password
          class="!text-[16px]"
          placeholder="Enter your password"
        ></el-input>
      </el-form-item>
      <div class="flex justify-between">
        <el-checkbox
          v-model="isRemember"
          label=" Remember for 30 days"
          size="large"
        />
        <router-link to="/">Forgot Password</router-link>
      </div>
    </el-form>
    <el-button
      type="primary"
      size="default"
      class="w-full !h-[54px]"
      @click="login"
    >
      Sign in
    </el-button>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
interface LoginForm {
  email: string
  password: string
}

const loginFrom = reactive<LoginForm>({
  email: '',
  password: ''
})

let isRemember = ref<boolean>(false)

const rules = reactive<FormRules<LoginForm>>({
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input the password', trigger: 'blur' }
  ]
})

const login = () => {}
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner {
  height: 55px;
  line-height: 55px;
}
</style>
