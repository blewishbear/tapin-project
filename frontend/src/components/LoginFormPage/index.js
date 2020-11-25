import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import '../../index.css'

export default function LoginFormPage() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }


    return (
        <div className="formContainer" >

            <form className='innerFormContainer' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="emailLabel">
                    <label>
                        Username or Email
                 <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='passwordLabel'>
                    <label>
                        Password
                    </label>
                    <input className='passwordInput'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>
                <button className='button' type="submit">Log In</button>
            </form>

        </div>
    )
}
