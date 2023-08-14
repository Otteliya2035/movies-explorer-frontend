import Promo from  "../../components/Main/Promo/Promo"
import AboutProject from "../../components/Main/AboutProject/AboutProject"
import Techs from "../../components/Main/Techs/Techs"
import AboutMe from "../../components/Main/AboutMe/AboutMe"
import Portfolio from "../../components/Main/Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import "../../components/Main/Main.css"
function Main() {
    return (
        <>
        
        < Promo />
       <AboutProject/>
       <Techs/>
       <AboutMe/>
        <Portfolio />
        <Footer />
        </>
    )
};

export default Main;