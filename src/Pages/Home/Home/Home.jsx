import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import StaticCards from "../StaticCards/StaticCards";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <AboutUs></AboutUs>
            <StaticCards></StaticCards>
        </div>
    );
};

export default Home;