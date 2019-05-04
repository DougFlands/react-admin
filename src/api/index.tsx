import http from './http'

export default {
  common: {
    login(username: string, password: string) {
      return http.get('/login', {
        params: {
          username,
          password,
        }
        // username,
        // password,
      })
    },
    register() {
      return http.get('/register', {
        
      })
    },

    test() {
      return http.post('/test', {
        
      })
    },
  },
}
