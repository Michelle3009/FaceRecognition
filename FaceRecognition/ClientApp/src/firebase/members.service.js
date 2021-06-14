import firebase from "./conf";

export function getMembersService() {
    return new Promise(async (resolve, reject) => {
        await firebase.db.collection('miembros').get().then((document) => {
            var members =[]
            document.docs.forEach((doc) => {
                var data = doc.data()
                data['id'] = doc.id
                members.push(data)
            })
            resolve(members)
        }).catch((error) => {
            reject(error)
        })
    })
}
export function createMember(name, family, images){
    return new Promise(async (resolve, reject) => {
        var Ref = firebase.db.collection("miembros")
        await Ref.add({
            nombre: name, parentesco: family, imagenes: images
        }).then((docRef) => {
            resolve(docRef.id)
        }).catch((error) => {
            reject(error)
        })
    })
}
export function uploadImagesMembers(filePaths, idMember){
    return new Promise(async (resolve, reject) => {
        if (filePaths.length <= 3) {
            Promise.all(
                filePaths.map((item, index) => {
                    return new Promise(async (resolve, reject) => {
                        const response = await fetch(item);
                        let ext = item.split("/").pop().split(".").pop();
                        const blob = await response.blob();
                        let ref = firebase.storage.ref().child(`people/${idMember}_${index}.${ext}`);
                        let uploadTask = ref.put(blob);
                        uploadTask.then(() => {
                            uploadTask.snapshot.ref.getDownloadURL()
                            .then((url) => {
                               resolve(url);
                            });
                        });
                    });
                })
            ).then((result) => {
                const listImages = result.flat();
                firebase.db.collection("miembros").doc(idMember)
                    .set({ imagenes: listImages }, { merge: true })
                    .then(() => {
                        resolve(listImages);
                    });
            });

        } else {
            reject("Solo se permite un máximo de tres imagenes por reporte");
        }

    });
}
