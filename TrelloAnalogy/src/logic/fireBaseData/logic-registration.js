import getData from "./getData";
import setData from "./setData";

const registration = async (obj, stateContext) => {
    const {setLoggedIn, setState} = stateContext;
    let loginInput = obj.login;
    let data = await getData();
    let status = false;
    for (let login in data) {
        if (!(loginInput === login)) {
            let token = Math.floor(Math.random() * 4500000);
            obj['token'] = token;
            setData(loginInput, obj)
            localStorage.setItem('token', token);
            setState(obj);
            setLoggedIn(true);
            status = true;
            break;
        } else {
            status = false;
        }
    }
    return status;
}
export default registration