import searchIcon from "../assets/svgs/header/search.svg"
import cartIcon from "../assets/svgs/header/cart.svg"
import heartIcon from "../assets/svgs/header/heart.svg"
import profileIcon from "../assets/svgs/header/profile.svg"
import menuIcon from "../assets/svgs/header/menu.svg"
import logo from "../assets/svgs/logo.svg"

import { HEADER_ITEMS } from "../data/util"
import { HeaderItem } from "../data/interfaces/header"

const Header = () => {
    return (
        <div className="header">
            <div className="flex items-center">
              <img src={menuIcon}/>
              <img className="logo" src={logo}/>
              <div className="items-container">
                {HEADER_ITEMS.map((item:HeaderItem) => {
                    return <span className="item"  key={item.id}>
                        {item.label}
                    </span>
                })}
              </div>
            </div>
            <div className="flex items-center">
                <div className="actions-icons-container">
                  <img src={searchIcon} />   
                  <img src={heartIcon}  />           
                  <img src={cartIcon} />   
                </div>
                <img  src={profileIcon} />                
             </div>
        </div>
    );
}
  
export default Header;
  