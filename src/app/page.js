import  './page.module.scss'
import Header from "./header/Header.page";
import SectionHomeInfo from "./sectionHomeInfo/SectionHomeInfo.page";
import SectionSliderSite from "./sectionSliderSite/SectionSliderSite.page";
import Footer from "./footer/footer.page";

export default function Home() {
  return (

    <div className="home">
    
      <div className="section">
         <Header/>
         </div>

         <div className="section">
     <SectionHomeInfo/> 
  
     </div>
     <div className="section">
    <SectionSliderSite/>
  
     </div>
     <div className="section">
  <Footer/>
  
     </div>
     </div>
   
   
  );
}
