import { Link } from "react-router-dom";

const ProductCard = () => {
    return ( <Link className="card" to="/details">
           <img className="img-fluid" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
           <div className="card-body">
                <p>Redmi Note 12</p>
           </div>
    </Link> );
}
 
export default ProductCard;