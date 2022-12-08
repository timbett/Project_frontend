import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
        <div>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <div>
            <Link to="/logout"><button>Logout</button></Link>
        </div>
        </>
    )
}
export default Navbar