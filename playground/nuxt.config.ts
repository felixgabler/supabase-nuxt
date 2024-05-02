export default defineNuxtConfig({
  modules: ['../src/module'],

  supabase: {
    // cookieOptions: {
    //   name: 'test',
    //   maxAge: 60 * 60,
    //   sameSite: 'strict',
    //   secure: false,
    // },
    // clientOptions: {
    //   auth: {
    //     flowType: 'implicit',
    //   },
    // },
    // redirect: true,
    url: 'http://127.0.0.1:54321',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      // include: ['/protected'],
      exclude: ['/unprotected', '/public/*'],
    },
  },
  routeRules: {
    '/login': { ssr: false },
    '/unprotected': { ssr: false },
  },
  nitro: {
    routeRules: {
      '/clientonly': { ssr: false },
    },
  },
})
