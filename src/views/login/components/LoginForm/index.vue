<template>
  <div>
    <el-form
      ref="form"
      :model="loginFrom"
      :rules="rules"
      label-width="80px"
      label-position="top"
      :inline="false"
      size="default"
    >
      <el-form-item label="Email">
        <el-input v-model="loginFrom.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginFrom.password" type="password"></el-input>
      </el-form-item>
    </el-form>
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

const rules = reactive<FormRules<LoginForm>>({
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input the password', trigger: 'blur' }
  ]
})
</script>

<style scoped></style>
