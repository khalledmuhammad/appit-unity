import MainStripe from "./MainStripe/MainStripe";
import OurServicesStripe from "./OurServicesStripe/OurServicesStripe";
import DealsStripe from "./DealsStripe/DealsStripe";
import WhyAppituneityStripe from "./WhyAppituneityStripe/WhyAppituneityStripe";
import FaqStripe from "./FaqStripe/FaqStripe";
import DedicatedTeamsStripe from "./DedicatedTeamsStripe/DedicatedTeamsStripe";
import VideoStripe from "./VideoStripe/VideoStripe";
import FormStripe from "./FormStripe/FormStripe";
import IndustryStrip from "./IndustryStrip/IndustryStrip";
import TestimonialStrip from "./TestimonialStrip/TestimonialStrip";
import SkillLogo from "./skill_logoME/SkillLogo";
import How2startStrip from "./How2startStrip/How2startStrip";

const Home = () => {
    return (
        <>
            <main>
                <MainStripe />
                <OurServicesStripe />
                <DealsStripe />
                <VideoStripe />
                <How2startStrip/>
                <WhyAppituneityStripe />
                <DedicatedTeamsStripe />
                <FaqStripe />
                <TestimonialStrip/>
                {/* <TechnologiesStripe /> */}
                <SkillLogo/>
                <IndustryStrip />
                <FormStripe />

                {/* <Footer/> */}
            </main>
            

        </>
    );
}
export default Home;