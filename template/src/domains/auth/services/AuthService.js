import Authentication from '@/support/firebase/services/Authentication'

export default class AuthService {

  authenticate (email, password) {
    let auth = new Authentication()
    auth.auth(email, password)
      .catch(error => {
        // .. handle errors here
      })
  }
}