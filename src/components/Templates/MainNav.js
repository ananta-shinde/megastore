import { Link } from "react-router-dom";
const MainNav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
        <Link class="navbar-brand text-primary" to="/">MegaStore</Link>
        <form className="d-flex w-50">
            <input class="form-control" type="text"/>
            <button class="btn">Search</button>
        </form>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <Link to="/categories" class="nav-link">Categories</Link>
            </li>
            <li class="nav-item">
                <Link to="/categories" class="nav-link">Cart</Link>
            </li>
            <li class="nav-item">
                <Link to="/categories" class="nav-link">Profile</Link>
            </li>
        </ul>
        </div>
    </nav>
     );
}
 
export default MainNav;