import React, {useContext, useState} from 'react'
import getUserData from "../logic/fireBaseData/getUserData";
import {DataAccount} from "../App";
import {Link, useNavigate} from 'react-router-dom';
import getAuthentication from "../logic/fireBaseData/getAuthentification";


const Authorization = () => {
    const navigate = useNavigate();
    const stateContext = useContext(DataAccount);
    const {state, setLoggedIn, loggedIn, setState} = stateContext;
    const [validation, setValidation] = useState(false);
    const [statusAuthorization, setStatusAuthorization] = useState(false);
    const [formData, setFormData] = useState({
        loginInput: '',
        passwordInput: ''
    });
    const [user, setUser] = useState('');
    const [validationEffect, setValidationEffect] = useState(false);

    React.useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            (async function () {
                let account = await getAuthentication(state, setState, setLoggedIn);
                if (account) {
                    setValidationEffect(true);
                    setLoggedIn(true);
                    navigate('/');
                }
            }());
        }
    }, [validationEffect]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    async function validationForm(e) {
        e.preventDefault();
        if (formData.loginInput && formData.passwordInput) {
            let userObj = await getUserData(formData);
            const isEmptyObj = Object.keys(userObj).length != 0;
            if (isEmptyObj) {
                setUser(userObj);
                setValidation(false);
                setStatusAuthorization(false);
                setLoggedIn(true);
                setState(userObj);
                navigate('/')
            } else {
                navigate('/registration')
            }
        } else {
            setValidation(true);
            setStatusAuthorization(true);
        }
    }

    return (
        <div className={'box-form'}>
            <form action="" onSubmit={validationForm}>
                <h1 className={'title'}>Authentification</h1>
                <input type={'text'}
                       id='loginInput'
                       name="loginInput"
                       onChange={handleChange}
                       className={'input-text'}
                       placeholder={"Login"}
                       value={formData.loginInput}

                />
                <input type={'text'}
                       id='passwordInput'
                       name="passwordInput"
                       onChange={handleChange}
                       className={'input-text'}
                       placeholder={"Password"}
                       value={formData.passwordInput}
                />
                {validation && <p className={'error'}>Please fill fields.</p>}
                {statusAuthorization && <p className={'error'}>Error password or login</p>}

                <button type={'submit'} className={'input-btn'}> Submit</button>
                <Link to="/registration">Registration</Link>
            </form>
        </div>
    );
}
export default Authorization;