import ProductDetailsCard from "./ProductDetailsCard";

const ProductList = () => {
    return ( 
        <div className="container">
           <div className="row"> 
               <div className="col-2">
                     filter area
               </div>
               <div className="col">
                   <div className="container-fluid">
                     <ProductDetailsCard/>
                     <ProductDetailsCard/>
                     <ProductDetailsCard/>
                     <ProductDetailsCard/>
                     <ProductDetailsCard/>
                    </div>
               </div>
           </div>
        </div>
     );
}
 
export default ProductList;