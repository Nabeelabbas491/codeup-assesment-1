
import reviewIcon from "../../assets/svgs/dashboard/review.svg"
import images from "../../assets/svgs/dashboard/product-images.svg"

const ProductInfo = () => {
    return (
        <div className="product-info-container">
        <div className="in-stock-label">In Stock</div>
        <div className="title">Refurbished iPhone 14 Pro</div>
        <div className="flex items-center">
            <span className="review-label">Reviews: 4/5</span>
            <span>
                {[1,2,3,4,5].map(() => {
                    return <img className="star" src={reviewIcon} />
                })}
            </span>
        </div>
        <p className="desc">
            Bringing you Dynamic Island, access your music while scrolling social media. Apple iPhone 14 Pro colours - Deep Purple, Gold, Silver and Space Black
        </p>
        <img src={images} />
         </div>
    );
}
  
export default ProductInfo;
  