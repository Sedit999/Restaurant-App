import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN
const projectId = process.env.REACT_APP_PROJECT_ID
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_APP_ID

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// creación de crud con Firebase

/*
//Create

addDoc(colletion(db, 'nombre_de_la_colleccion'), { nombre })
//
const createDoc = async(nombre) => {
  await addDoc(collection(db, 'users'), {nombre})
  getMensajes(db, 'users')
}

//Read

getDocs(query(colletion(db, 'nombre_de_la_colleccion')))
//
useEffect(() => {
  getMensajes(db, 'users')
},[])
async function getMensajes(db, coleccion) {
  const mensajesSnapshot = await getDocs(query(collection(db, coleccion)))
  const listaMensajes = mensajesSnapshot.docs.map((doc) => doc)
  return setData(listaMensajes)
}

//Update

updateDoc(doc(db, 'nombre_de_la_colleccion', id), { nombre })
//
const handleUpdate = async (id, coleccion, nombre) => {
  await updateDoc(doc(db, coleccion, id), {nombre})
  getMensajes(db, 'users')
}

//Delete

deleteDoc(doc(db, 'nombre_de_la_colleccion', id))
//
const handle

*/
export default db;