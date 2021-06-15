import firebase from "./conf";

export class Login {
    Login(ID, username, password) {
        this.ID = ID;
        this.userID = username;
        this.password = password;
    }
}

export class LoginService {

    constructor() {
        this.lastVisible = null;
    }

    logCities = async () => {
        let citiesRef = firebase.db.collection("usuarios");
        let allCities = await citiesRef.get();
        for (const doc of allCities.docs) {
            console.log(doc.id, '=>', doc.data());
        }
    }
    getSearchResult(user, password) {
        return new Promise(async (resolve, reject) => {
            const val = false;
            const solicitudes = [];
            var collectionRef = firebase.db.collection("usuarios");
            let allCities = await collectionRef.get();
            if (user !== '') {
                collectionRef = collectionRef.where('userID', '==', user)
                collectionRef = collectionRef.where("password", "==", password)
                console.log(user, password)
                collectionRef = await collectionRef.get().then((documentSnapshots) => {

                    documentSnapshots.docs.forEach((doc) => {

                        const { userID, password } = doc.data()
                        let ids = doc.id;
                        solicitudes.push({
                            ids,
                            userID,
                            password
                        });

                    });

                    resolve(solicitudes)

                }).catch((error) => {

                    console.log(error);
                    reject(error);

                });









            }


        }).catch((error) => {

            console.log(error);


        });
    }
        adduser(name,apellido,username,email,contrasena) {
            return new Promise(async (resolve, reject) => {
                const val = false;
                const solicitudes = [];
                var collectionRef = firebase.db.collection("usuarios");
                let allCities = await collectionRef.get();
                if (name !== '') {
                    const user = { name: name, apellido: apellido,userID:username, email: email, password: contrasena }
                    await firebase.db.collection("usuarios").add(user).then(() => {

                       

                        resolve(true)

                    }).catch((error) => {

                        console.log(error);
                        reject(error);

                    });

                }


            }).catch((error) => {

                console.log(error);


            });



    }


}