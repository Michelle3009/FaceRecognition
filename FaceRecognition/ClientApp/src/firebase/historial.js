import firebase from "./conf";

export class Historial {
    Historial(ID, descripcion, fecha, imagen, nombre) {
        this.ID = ID;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.nombre = nombre;
        this.fecha = fecha;
    }
}

export class HistorialService {

    constructor() {
        this.lastVisible = null;
    }

    getSearchResult() {
        return new Promise(async (resolve, reject) => {
            const val = false;
            const solicitudes = [];
            var collectionRef = firebase.db.collection("historial").where('estado', '==', true);
            let allCities = await collectionRef.get();

                collectionRef = await collectionRef.get().then((documentSnapshots) => {

                    documentSnapshots.docs.forEach((doc) => {

                        const { nombre, descripcion, fecha, imagen } = doc.data()
                        let id = doc.id;
                        solicitudes.push({
                            id,
                            nombre,
                            fecha, imagen, descripcion
                        });

                    });

                    resolve(solicitudes)

                }).catch((error) => {

                    console.log(error);
                    reject(error);

                });

        }).catch((error) => {

            console.log(error);


        });
    }

    getSearchResult2() {
        return new Promise(async (resolve, reject) => {
            const val = false;
            const solicitudes = [];
            var collectionRef = firebase.db.collection("historial").where('estado', '==', false);
            let allCities = await collectionRef.get();

            collectionRef = await collectionRef.get().then((documentSnapshots) => {

                documentSnapshots.docs.forEach((doc) => {

                    const { nombre, descripcion, fecha, imagen } = doc.data()
                    let id = doc.id;
                    solicitudes.push({
                        id,
                        nombre,
                        fecha, imagen, descripcion
                    });

                });

                resolve(solicitudes)

            }).catch((error) => {

                console.log(error);
                reject(error);

            });

        }).catch((error) => {

            console.log(error);


        });
    }


}