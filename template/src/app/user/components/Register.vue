<template>
  <div>
    <h1>Register Page</h1>
  </div>
</template>

<script>
import {email, cpf}  from  '@/support/helpers/validators'
import Firestore from '@/support/firebase/services/Firestore'

export default {
  mounted () {
    const fire = new Firestore()

  },
}
</script>