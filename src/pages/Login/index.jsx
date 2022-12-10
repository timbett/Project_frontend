import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
   
    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://instant-eats-production.up.railway.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => (user))
                setTimeout(() => {
                    navigate("/products")
                }, 1000)
            } else {
                r.json().then((errors) => setErrors(Object.values(errors)))
                console.log(errors)
            }
        })
    }
    return (
        <div className="login">
            <span className="registertittle">Login</span>
            <form className="registerform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerinput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username..." />
                <label>Password</label>
                <input className="registerinput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." />
                <button className="loginbutton">Login
                </button>
                <button className="registerbutton">
                    <Link className="link" to="/">signup</Link>
                </button>
            </form>
        </div>
    )
}