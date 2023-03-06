import React, {useContext, useState} from 'react'
import registration from "../logic/fireBaseData/logic-registration";
import {DataAccount} from "../App";
import {Link, useNavigate} from 'react-router-dom';

const Registration = () => {
    const navigation = useNavigate();
    const [validation, setValidation] = useState(false);
    const stateContext = useContext(DataAccount);
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        email: ''
    });

    async function validationForm(e) {
        e.preventDefault();
        if (formData.login && formData.password && formData.email) {
            setValidation(false);
            let reg = await registration(formData, stateContext);
            console.log(reg)
            navigation('/');
        } else {
            setValidation(true);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div className={'box-form'}>
            <form action="">
                <h1 className={'title'}>Registration</h1>
                <input type={'text'}
                       id='loginInput'
                       name="login"
                       onChange={handleChange}
                       className={'input-text'}
                       placeholder={"Login"}
                       value={formData.loginInput}

                />
                <input type={'text'}
                       id='passwordInput'
                       name="password"
                       onChange={handleChange}
                       className={'input-text'}
                       placeholder={"Password"}
                       value={formData.passwordInput}
                />
                <input type={'text'}
                       id='emailInput'
                       name="email"
                       onChange={handleChange}
                       className={'input-text'}
                       placeholder={"Email"}
                       value={formData.emailInput}
                />

                {validation && <p className={'error'}>Please fill fields.</p>}

                <button type={'submit'} onClick={validationForm}
                        className={'input-btn'}> Submit
                </button>
                <Link to="/authorization">Authorization</Link>
            </form>
        </div>
    );
}
export default Registration;