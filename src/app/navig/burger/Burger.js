 import "./burger.scss";
// import { header_menu } from "../../../../data";

export default function Burger() {
  return (
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span>Menu</span>
      </label>

      {/* <ul className="menubox"> */}
        
<div className="menubox"> 
 <div className="block_item">
<li className="menu-item">Портфолio </li>
<li className="menu-item">Послуги</li>
<li className="menu-item">Контакти</li> 

 </div>
   
    </div>      

    

        {/* <li>
          <span className="menu-item">Каталог</span>
        </li>
        {header_menu.map((item, index) => (
          <li key={index}>
            <a className="menu-item" href={item.link}>
              {item.title}
            </a>
          </li> */}
        {/* ))} */}
      {/* </ul> */}
    </div>
  );
}



{/* <ul className="menubox">       
<li className="menu-item">О продукте </li>
<li className="menu-item">Каталог</li>
<li className="menu-item">Акции</li>
<li className="menu-item">Полезное</li>
<li className="menu-item">Авторы</li>       
</ul> */}
