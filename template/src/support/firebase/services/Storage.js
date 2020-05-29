import BaseConfig from "../BaseConfig";

export default class Storage extends BaseConfig{

  constructor () {
    super()

    if (!!Storage.instance) {
      return Storage.instance
    }

    Storage.instance = this
    // implementar possiveis logicas aqui
    return this
  }

  /**
   * Retorna a url de download do arquivo
   * @param {string} fullPath
   */
  async getDownloadURL(fullPath) {
    return await this.storageInstance
      .ref().child(fullPath)
      .getDownloadURL()
  }
}
