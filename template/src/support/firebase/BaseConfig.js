import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import { setup } from './configs'

export default class BaseConfig {
  firestoreInstance;
  authInstance;
  storageInstance;


  constructor() {
    if (!!BaseConfig.instance) {
      return BaseConfig.instance
    }

    BaseConfig.instance = this;

    Firebase.initializeApp(setup)

    // Inicializa as instancias dos recursos que pretende utilizar no projeto
    this.firestoreInstance = Firebase.firestore();
    this.authInstance = Firebase.auth();

    this.authGoogleProvider = new Firebase.auth.GoogleAuthProvider()

    this.storageInstance = Firebase.storage();
    this.functionInstance = Firebase.functions();

    return this;
  }
}
