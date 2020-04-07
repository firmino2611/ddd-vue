import BaseConfig from "../BaseConfig";

/**
 * Serviço de autenticação com o sistema do Firebase
 */
export default class Authentication extends BaseConfig {

  constructor () {
    super()
    if (!!Authentication.instance) {
      console.log('instance already')
      return Authentication.instance
    }

    Authentication.instance = this

    return this
  }

  /**
   * Autentica um usuario usando email e senha
   * @param {String} email 
   * @param {String} password 
   */
  auth (email, password) {
    return this.authInstance.signInWithEmailAndPassword(email, password)
  }

  /**
   * Cadastra um novo usuario no sistema de autentuicação do Firebase
   * @param {String} email 
   * @param {String} password 
   */
  register (email, password) {
    return this.authInstance.createUserWithEmailAndPassword(email, password)
  }

  /**
   * Recupera o usuário autenticado
   */
  currentUser () {
    return this.authInstance.currentUser
  }

  /**
   * Atualiza as informações do usuario logado
   * @param {Object} data 
   */
  updateUser (data) {
    let user = this.currentUser()
    return  user.updateProfile(data)
  }

  /**
   * Envia email de verificação para o usuário
   */
  emailVerify () {
    let user = this.currentUser()
    return this.authInstance.sendEmailVerification()
  }

  /**
   * Redefine a senha do usuário logado
   * @param {String} password 
   */
  updatePassword (password) {
    let user = this.currentUser()
    return this.authInstance.updatePassword(password)
  }

  
}