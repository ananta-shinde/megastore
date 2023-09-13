const ProductDetailsCard = () => {
    return ( 
        <div className="card m-1 shadow p-4">
        <div className="row">
            
           <div className="col"><img className="img-fluid" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70"/></div>
           <div className="col">
            <ul>
                <li>Ram: 12GB</li>
                <li>Battery: 6000mah</li>
                <li>Os: Android</li>
                <li>Camera: 60 MP</li>
            </ul>
           </div>
           <div className="col">
           <span className="display-4 fw-medium">Rs. 15999 <span className="fw-light fs-3 text-decoration-line-through">17999 </span></span>
                        <span className="fs-5 badge bg-success mx-2">20% OFF</span>
           </div>
           </div>
        </div>
     );
}
 
export default ProductDetailsCard;