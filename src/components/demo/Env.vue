<template>
  <!-- ↓环境变量demo -->
  <div>
    <h2>环境变量</h2>
    mode: {{ mode }} <br />
    host: {{ host }} <br />
    port: {{ port }} <br />
    baseUrl: {{ baseUrl }}
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'


    // ↓读取内建环境变量
    const mode = import.meta.env.MODE
    // ↓读取自定义环境变量
    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_PORT
    const baseUrl = import.meta.env.VITE_BASE_URL


</script>
