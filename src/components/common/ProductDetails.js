import HomeTemplate from "../Templates/HomeTemplate";
import MainTemplate from "../Templates/MainTemplate copy";

const ProductDetails = () => {
    return ( 
        <MainTemplate>
        <div className="container py-4">
             <div className="row">
                <div className="col d-flex">
                    <div className="d-flex flex-column">
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    
                    </div>
                    <img className="w-75" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                </div>
                <div className="col">
                    <h2>Redmi note 12</h2>
                </div>
             </div>
        </div>
        </MainTemplate>
     );
}
 
export default ProductDetails;