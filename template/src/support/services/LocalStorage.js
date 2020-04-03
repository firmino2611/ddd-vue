export default class {

  /**
   * Salva os dados no armazenamento local do navegador
   * @param key:string cahve de indentificação dos dados
   * @param value:object valor a ser armazenado
   */ 
  static store (key, value) {
      window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Recupera um valor salvo no larmazenamento local
   * @param key:string
   */
  static get (key) {
      return JSON.parse(window.localStorage.getItem(key))
  }

  /**
   * Exclui um valor em uma chave especifcia do armazenamento local
   * @param key:string
   */
  static delete (key) {
      window.localStorage.removeItem(key)
  }

  /**
   * Verifica se uma determinada chave existe no armazenamento local
   * @param key:string
   */
  static exist (key) {
      if (window.localStorage.getItem('user') != null)
          return true
      return false
  }
}