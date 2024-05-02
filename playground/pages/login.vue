<!-- eslint-disable no-console -->
<script setup lang="ts">
const supabase = useSupabaseClient()
const user = await useSupabaseUser()

const { data } = await useUser();

watchEffect(() => {
  // Can be uncommented in next nuxt version when https://github.com/nuxt/nuxt/issues/21841 is fixed
  if (user.value) {
    console.log('navigate to / !')
    // return navigateTo('/')
  }
})

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error) console.log(error)
}

const signIn = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error) console.log(error)
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}

const email = ref('')
</script>

<template>
  <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 20px;
    ">
    User: {{ data + '' }}
    <NuxtLink to="/unprotected">
      Go to unprotected page
    </NuxtLink>
  </div>
</template>
