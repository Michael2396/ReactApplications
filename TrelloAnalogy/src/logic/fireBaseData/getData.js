import {initializeApp} from "firebase/app";
import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import {getDatabase, ref, get, onValue, once, set, child, update, remove} from "firebase/database";
// import {getDatabase, ref, child, get} from "firebase/database";

import setData from "./setData";

const firebaseConfig = {
    //apiKey
};
const app = initializeApp(firebaseConfig);

const getData = async () => {
    const db = await getDatabase();
    const starCountRef = await ref(db, 'TheStudents');
    const snapshot = await get(starCountRef);
    const data = snapshot.val();
    return data;
}

export default getData;
