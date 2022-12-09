import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar(){
    return(
        <>
       
        <div className="navbar">
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <div className="log">
            <Link to='/login'><button>Login</button></Link>
            <Link to="/logout"><button>Logout</button></Link>
        </div>
        </>
    )
}
export default Navbar