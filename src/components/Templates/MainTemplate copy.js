import CategoriesNav from "./CategoriesNav";
import Footer from "./Footer";
import MainNav from "./MainNav";

const MainTemplate = (props) => {
    return ( 
        <>
         <MainNav/>
         <div className="container-fluid">
            {props.children}
        </div>
        <Footer/>
        </>
       
     );
}
 
export default MainTemplate;