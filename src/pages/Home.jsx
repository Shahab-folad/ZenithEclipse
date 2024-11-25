
import CollaborateChart from "../components/CollaborateChart"
import Description from "../components/Description"
import HomeParagraph from "../components/HomeParagraph"
// import SliderShow from '../components/SliderShow'
import Faq from "../components/Faq"
import Header from "../components/Header"
import { useEffect } from "react"
import Tabs from "../components/Tabs"
// import Description2 from "../components/Description2"
import Navbar from "../components/Navbar/Navbar"
import SlideShow from "../components/SlideShow"
// import FortyContent from "../components/FortyContent";
// import ElementContainer from "../components/ElementContainer"
import DescriptionV2 from "../components/DescriptionV2"

const Home = () => {

    useEffect(()=>{
        document.title = "Zenith Eclipse"
    })

    return (
        <div>
            <Navbar/>
            <Header/>
            <Tabs/>
            <HomeParagraph />
           
            
            {/* <Description2/> */}
            {/* <SliderShow/> */}
            <SlideShow />
            {/* <Description /> */}
            <DescriptionV2 />
            
            <CollaborateChart />
            <Faq />
        </div>
    )
}

export default Home
