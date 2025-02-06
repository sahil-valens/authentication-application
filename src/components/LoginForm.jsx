import { useState } from "react";
import InputField from "./InputField";
import Footer from "./Footer";
import Header from "./Header";

export default function LoginForm() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function onUserNameChange(e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function onPasswordChange(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        resetForm()
    }

    function resetForm() {
        setUsername("")
        setPassword("")
    }

    return (
        <>
            <Header heading="Login Form 📝"/>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputField 
                    label="Username"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username here"
                    onChange={onUserNameChange}
                />
                <InputField 
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password here"
                    onChange={onPasswordChange}
                />
                <InputField 
                    type="submit"
                    name="submit"
                    value="Log in 🚀"
                    onChange={handleSubmit}
                />
            </form>
            <Footer />
        </>
    )
}