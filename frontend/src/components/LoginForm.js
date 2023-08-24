import React, { useRef, useState, useEffect } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
    const [username, setUsernameInp] = useState('');
    const [password, setPasswordInp] = useState('');
    const [disabled, setDisabled] = useState(true);
    const submitButton = useRef(null);

    console.log(onSubmit);

    useEffect(() => {
        if (!!username && !!password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [username, password])

    const handleChange = (e, stateSetter) => {
        stateSetter(e.target.value);
    }

    const handleLogin = (e) => {
        console.log('¿asdfasdfasd');
    }

    return (
        <div>
            <input type="text" value={username} onChange={e => handleChange(e, setUsernameInp)} name="username" id="username-input" required />
            <input type="password" value={password} onChange={e => handleChange(e, setPasswordInp)} name="password" id="password-input" required />
            <button type="submit" id="login-button" ref={submitButton} value="Login" disabled={disabled} onClick={handleLogin} >login</button>
        </div>
    );
}
