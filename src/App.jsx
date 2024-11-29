
import Footer from "./components/footer/Footer"
// import Navbar from "./components/Navbar";
import { motion } from 'framer-motion';
import Checkpeas from "./pages/products/Checkpeas";
import Flaxseeds from "./pages/products/Flaxseeds";
import GreenLintil from "./pages/products/GreenLintil";
import Millet from "./pages/products/Millet";
import Oats from "./pages/products/Oats";
import Rapeseed from "./pages/products/Rapeseed";
import RedLintil from "./pages/products/RedLintil";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Barly from "./pages/products/Barly";
import SunflowerMeal from "./pages/products/SunflowerMeal";
import SunflowerOil from "./pages/products/SunflowerOil";
import Yellowpeas from "./pages/products/YellowPeas";
import Wheat from "./pages/products/Wheat";
import Home from './pages/Home'
import SunflowerSeed from "./pages/products/SunflowerSeed";
import CorianderSeed from "./pages/products/CorianderSeed";
import FlaxseedMeal from "./pages/products/FlaxseedMeal";
import RapeseedMeal from "./pages/products/RapeseedMeal";
import SoyaMealSupplier from "./pages/products/SoyaMealSupplier";
import Flour from "./pages/products/Flour";
import FlaxseedOil from "./pages/products/FlaxseedOil";
import RapeseedOil from "./pages/products/RapeseedOil";
import Ethylene from "./pages/products/Ethylene";
// import Navbar from "../components/Navbar/Navbar"
import Polyethylene from "./pages/products/Polyethylene";
import Propylene from "./pages/products/Propylene";
import EndToEndTransportation from "./pages/services/EndToEndTransportation";
// SERVICES PART*************************************
import Services from "./pages/services/Services";
import AirCargo from "./pages/services/AirCargo";
import OceanFreight from "./pages/services/OceanFreight";
import RoadTransport from "./pages/services/RoadTransport";
import RailTransport from "./pages/services/RailTransport";
import MultimodalTransportation from "./pages/services/MultimodalTransportation";
import TransportProjectCargo from "./pages/services/TransportProjectCargo";
import TCL from "./pages/services/TCL";
import SupplyChainSolution from "./pages/services/SupplyChainSolution";
import SupplyChainManagementS from "./pages/services/SupplyChainManagementS";
import LogisticOperationManagement from "./pages/services/LogisticOperationManagement";

// ***********************************************************
// import Grains from "./pages/products/Grains";
import Grains from "./pages/products/Grains";
import Lentils from "./pages/products/Lentils";
import Products from "./pages/products/Products";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>

          {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/millet" element={<Millet/>} />
          <Route path="/oats" element={<Oats/>} />
          <Route path="/barley" element={<Barly/>} />
          <Route path="/whole-yellow-peas" element={<Yellowpeas/>} />
          <Route path="/green-lentils" element={<GreenLintil />} />
          <Route path="/red-lentils" element={<RedLintil />} />
          <Route path="/flaxseeds" element={<Flaxseeds />} />
          <Route path="/sunflowerseed" element={<SunflowerSeed />} />
          <Route path="/corianderseed" element={<CorianderSeed />} />
          <Route path="/chickpeas" element={<Checkpeas />} />
          <Route path="/wheat" element={<Wheat />} />
          <Route path="/rapeseeds" element={<Rapeseed/>} />
          <Route path="/rapeseeds-oil" element={<RapeseedOil/>} />
          <Route path="/sunflower-meal" element={<SunflowerMeal />} />
          <Route path="/flaxseed-meal" element={<FlaxseedMeal />} />
          <Route path="/flaxseed-oil" element={<FlaxseedOil />} />

          <Route path="/sunflower-oil" element={<SunflowerOil />} />
          <Route path="/rapeseed-meal" element={<RapeseedMeal />} />
          <Route path="/soya-meal-supplier" element={<SoyaMealSupplier />} />
          <Route path="/flour" element={<Flour />} />
          <Route path="/ethylene-solution" element={<Ethylene />} />
          <Route path="/polyethylene" element={<Polyethylene />} />
          <Route path="/propylene-supplier" element={<Propylene />} />
          <Route path="/grains" element={<Grains />} />
          <Route path="/lentils" element={<Lentils />} />
          <Route path="/products" element={<Products />} />

  {/************************************** services **************************************/}

         <Route path="/services" element={<Services />} />
          <Route path="/end-to-end-transportation" element={<EndToEndTransportation />} />
         <Route path="/air-freight-forwarding" element={<AirCargo />} />
         <Route path="/ocean-freight-forwarding" element={<OceanFreight />} />
         <Route path="/road-transport" element={<RoadTransport />} />
         <Route path="/rail-transport" element={<RailTransport />} />
         <Route path="/multimodal-transportation" element={<MultimodalTransportation />} />
         <Route path="/transport-project-cargo" element={<TransportProjectCargo />} />
         <Route path="/temperature-controlled-logistics" element={<TCL />} />
         <Route path="/supply-chain-solutions" element={<SupplyChainSolution />} />
         <Route path="/supply-chain-management-services" element={<SupplyChainManagementS />} />
         <Route path="/logistics-operations-management" element={<LogisticOperationManagement />} />


        </Routes>

        <Footer />
      </Router>



    </>
  )
}

export default App
