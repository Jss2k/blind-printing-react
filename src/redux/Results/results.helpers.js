import { firestore } from './../../firebase/utils'

export const handleAddResult = result => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('results')
      .doc()
      .set(result)
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const handleFetchResults = () => {
  return new Promise((resolve, reject) => {
    // const pageSize = 10

    firestore
      .collection('results')
      // .limit(pageSize)
      .get()
      .then(snapshot => {

          const resultArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        })
        resolve(resultArray)
      })
      .catch(err => {
        reject(err);
      })
  })
}
