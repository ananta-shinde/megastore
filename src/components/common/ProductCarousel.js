import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
const ProductCarousel = () => {
    return ( 
        <div className="py-4">
            <div className="d-flex justify-content-between px-4 py-2 bg-light">
                <h4 className="text-primary">Today's Deals</h4>
                <Link className="btn btn-link" to="/product/list">View all</Link>
            </div>
            <div className="d-flex justify-content-around py-3">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
     );
}
 
export default ProductCarousel;