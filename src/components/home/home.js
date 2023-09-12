import { Link } from "react-router-dom";
import ProductCarousel from "../common/ProductCarousel";
import HomeTemplate from "../Templates/HomeTemplate";

const Home = () => {
    return ( 
    <HomeTemplate>
       <ProductCarousel/>
       <ProductCarousel/>
       <ProductCarousel/>
    </HomeTemplate>
     );
}
 
export default Home;