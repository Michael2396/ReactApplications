import {initializeApp} from "firebase/app";
import {getDatabase, ref, get, onValue, set, child, update, remove} from "firebase/database";

const firebaseConfig = {
 //apiKey
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function setData(login, obj) {
    update(ref(db, "TheStudents/" + login), {
        ...obj
    })
        .then(() => {
            console.log('data stored success');
        })
        .catch((error) => {
            alert('uncesufull')
        })
}

export default setData;
