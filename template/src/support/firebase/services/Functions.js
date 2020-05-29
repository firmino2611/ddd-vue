import BaseConfig from "../BaseConfig";

export default class Functions extends BaseConfig {
  constructor() {
    super()
    if (!!Functions.instance) {
      return Functions.instance
    }

    Functions.instance = this

    return this
  }

  callFunction (name, data) {
    let call = this.functionInstance.httpsCallable(name)
    if (!data)
      return call()

    return call(data)
  }
}
