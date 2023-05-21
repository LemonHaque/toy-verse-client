import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import AboutUs from "../AboutUs/AboutUs";
import OurFacilities from "../OurFacilities/OurFacilities";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <AboutUs></AboutUs>
            <OurFacilities></OurFacilities>
        </div>
    );
};

export default Home;