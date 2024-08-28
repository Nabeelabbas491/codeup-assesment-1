import galleryIcon from "../assets/svgs/footer/gallery.svg"
import cartIcon from "../assets/svgs/footer/cart.svg"

const Footer = () => {
    return (
        <div className="footer">
           <div className="flex items-center">
              <img src={galleryIcon} />
              <span className="view-all">View All</span>
           </div>
           <div className="flex items-center">
               <span className="img-count-label">01</span>
               <div className="horizontal-lines">
                  <span className="solid-line selected"></span>
                  <span className="solid-line"></span>
                  <span className="solid-line"></span>
               </div>
               <span className="img-count-label">03</span>
           </div>
           <div className="cart-container">
               <div className="cart">
                  <img src={cartIcon} />
               </div>
               <div className="flex justify-between w-100 m-2">
                 <span>Add to Cart</span>
                 <span>$980</span>
               </div>
           </div>
        </div>
    );
}
  
export default Footer;
  