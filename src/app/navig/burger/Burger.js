import "./burger.scss";
import Link from "next/link";

export default function Burger({textColor}) {

  return (
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span style={{ color: textColor }} >Menu</span>
      </label>

      <div className="menubox">
        <div className="block_item">
        <li>
          <Link href="/"className="menu-item">Головна</Link>  
            </li> 
          <li>
          <Link href="/portfolio"className="menu-item">Портфолiо</Link>  
            </li> 
            <li>
          <Link href="/services"className="menu-item">Послуги</Link>  
            </li>
            <li>
          <Link href="/contact"className="menu-item">Контакти</Link>  
            </li>
        </div>
      </div>
    </div>
  );
}
