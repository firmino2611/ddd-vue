import BaseConfig from "../BaseConfig";

export default class Firestore extends BaseConfig {

  constructor() {
    super()

    if (!!Firestore.instance) {
      console.log('instance already')
      return Firestore.instance
    }

    Firestore.instance = this

    this.firestoreInstance.enablePersistence()
      .catch(function (err) {
        if (err.code === 'failed-precondition') {
          console.log('support offline data')
        } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log('require permission')
        }
      });

    return this
  }

  getDocOfCollection(collection, doc) {
    return this.firestoreInstance.collection(collection).doc(doc)
  }

  getColeection(collection) {
    return this.firestoreInstance.collection(collection)
  }

  getSubCollectionOfDoc(doc, subcollection) {
    let collection = doc.split('.')
    return this.firestoreInstance.collection(collection[0]).doc(collection[1])
      .collection(subcollection)
  }

}