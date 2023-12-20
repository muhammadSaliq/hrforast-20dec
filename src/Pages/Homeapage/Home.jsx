import Navbars from "../../Ccomponents/Header/Navbar/Navbars";
import Section2 from "../../Ccomponents/Main/Home Component/Section2/Section2";
import Footer from "../../Ccomponents/Footer/Footer";
import Section3 from "../../Ccomponents/Main/Home Component/Sectiion3/section3";
import Section4 from "../../Ccomponents/Main/Home Component/Section4/section4";
import Section5 from "../../Ccomponents/Main/Home Component/Section5/section5";
import Subimage from "../../Ccomponents/Main/Home Component/Subimage/Subimage";
import Subsection from "../../Ccomponents/Main/Home Component/subsection/Subsection";
import Subsection2 from "../../Ccomponents/Main/Home Component/Subsection2/Subsection2";
import Subsection3 from "../../Ccomponents/Main/Home Component/Subsection3/Subsection3";
import Subsection4 from "../../Ccomponents/Main/Home Component/Subsection4/Subsection4";
const Home = () => {

    return (
        <>
        <Navbars />
        <Subimage/>
        <Subsection/>
        <Subsection2/>
        <Subsection3/>
        <Subsection4/>
    {/*
        <Section2 />
    <Section3/> 
        <Section4/> 
        <Section5/>*/}
        <Footer/>
        </>
    )
};
export default Home;