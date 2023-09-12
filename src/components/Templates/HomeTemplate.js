import CategoriesNav from "./CategoriesNav";
import Footer from "./Footer";
import MainNav from "./MainNav";

const HomeTemplate = (props) => {
    return ( 
        <>
         <MainNav/>
         <CategoriesNav/>
         <div className="container-fluid">
            {props.children}
        </div>
        <Footer/>
        </>
       
     );
}
 
export default HomeTemplate;