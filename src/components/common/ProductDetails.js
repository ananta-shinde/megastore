import HomeTemplate from "../Templates/HomeTemplate";
import MainTemplate from "../Templates/MainTemplate copy";
import ProductCarousel from "./ProductCarousel";
import Ratings from "./Ratings";

const ProductDetails = () => {
    return ( 
        <MainTemplate>
        {/* ------------------- details top panel ------------------ */}
        <div className="container py-4">
             <div className="row">
                <div className="col-lg-6 d-flex">
                    <div className="d-flex flex-column">
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    <img  className="img-thumbnail " style={{width:"60px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                    
                    </div>
                    <img className="w-75" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/>
                </div>
                <div className="col-lg-6  d-flex flex-column justify-content-between p-4">
                    <div>
                        <h2>Redmi note 12</h2>
                        <Ratings value={3}/>
                        <p className="p-1">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <span className="display-4 fw-medium">Rs. 15999 <span className="fw-light fs-3 text-decoration-line-through">17999 </span></span>
                        <span className="fs-5 badge bg-success mx-2">20% OFF</span>
                    </div>
                    <div className="p-4 p-lg-0">
                        <button className="btn btn-light w-50">Add To Cart</button>
                        <button className="btn btn-warning w-50">Buy Now</button>
                    </div>
                </div>
             </div>
        </div>
        {/* ----------------------- details review panel -------------------- */}
        <div className="container">
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                <li class="nav-item col" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Specification</button>
                </li>
                <li class="nav-item col" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Reviews</button>
                </li>
                <li class="nav-item col" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Offers</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                changed t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
            </div>
        </div>

        <ProductCarousel/>

        </MainTemplate>
     );
}
 
export default ProductDetails;