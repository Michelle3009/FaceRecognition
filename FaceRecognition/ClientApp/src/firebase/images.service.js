import firebase from "./conf";

var idDoc = "";
export function uploadImage(filePath, type) {
       
    return new Promise(async (resolve, reject) => {
         var length = 0;
        await getLengthImages().then((res) => {
            length = res })
        const response = await fetch(filePath);
        const blob = await response.blob();
        let ref = firebase.storage.ref().child(`camera/photo${length++}.${type}`);
        let uploadTask = ref.put(blob);
        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL()
                .then((url) => {
                    setLenghtImages(length++)
                    resolve(url);
                });
            });
        });
}
function setLenghtImages(num) {
    var docRef = firebase.db.collection("ImagesLenght")
    docRef.doc(idDoc).update({ length: num }).then(() => {
        console.log("Se actualizó correctamente");

    }).catch((error) => {
        console.log(error)
    })

}
function getLengthImages() {
    return new Promise(async (resolve, reject) => {
        var docRef = firebase.db.collection("ImagesLenght")
        await docRef.get().then((document) => {
            document.docs.forEach((doc) => {
                idDoc = doc.id;
                resolve(doc.data().length)
            })

        }).catch((error) => {
            console.log(error)
            reject(error)
        })

    })
}
export default uploadImage