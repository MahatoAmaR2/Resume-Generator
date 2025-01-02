import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Service from "./Service";
import Tamplate from "./Tamplate";
import ResumeSteps from "./ResumeSteps";
import FAQ from "./FAQ";

function Home() {
    return ( 
        <>
            <Header/>
            <Hero/>
            <Service/>
            <Tamplate/>
            <ResumeSteps/>
            <FAQ/>
        </>
     );
}

export default Home;