
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductInfo from "./product-info";
import productImage from "../../assets/svgs/dashboard/product-image.svg"
import ProductConfigurations from "./product-config";


const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <div className="content">
              <div className="w-30 flex items-center">
                <ProductInfo/>
              </div>
              <div className="w-30 flex items-center">
                <img src={productImage}/>
              </div>
              <div className="w-30 flex items-center">
                <ProductConfigurations/>
              </div>
            </div>
            <div className="footer-container">
               <Footer/>
            </div>
        </div>
    );
}
  
export default Dashboard;
  