import getData from "./getData";

async function getAuthentication(state, setState, setLoggedIn) {
    let token = localStorage.getItem('token');
    let status = false;
    if (token) {
        let obj = await getData();
        for (let user in obj) {
            let objPerson = {};
            if (obj[user].token == token) {
                objPerson = {...obj[user]};
                setLoggedIn(true);
                setState({...objPerson});
                status = true;
                break;
            }
        }
    }
    return status;
}

export default getAuthentication;