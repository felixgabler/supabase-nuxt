export async function useUser() {
  const supabaseUser = await useSupabaseUser()

  const userId = computed(() => supabaseUser.value?.id)

  const { data } = await useLazyAsyncData(
    'user',
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return userId.value
    },
    {
      watch: [userId],
      default: () => undefined,
    },
  )

  return {
    data,
  }
}
