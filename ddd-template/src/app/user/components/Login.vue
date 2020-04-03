<template>
  <div>
    <h1>Login Page</h1>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  mounted () {
    console.log(store.state.auth.title)
  },
}
</script>