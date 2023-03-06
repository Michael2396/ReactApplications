import getData from "./getData";

async function getUserData(inputData) {
    let loginInput = inputData.loginInput;
    let passwordInput = inputData.passwordInput;
    let dateOutput = await getData();
    let userData = {};
    for (let user in dateOutput) {
        if (user == loginInput && dateOutput[user].password == passwordInput) {
            let objPerson = {...dateOutput[loginInput]};
            localStorage.setItem('token', dateOutput[loginInput].token);
            userData = {...objPerson};
            break;
        }
    }
    return userData;
}

export default getUserData;