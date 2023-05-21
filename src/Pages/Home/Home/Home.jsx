import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import StaticCards from "../StaticCards/StaticCards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <StaticCards></StaticCards>
        </div>
    );
};

export default Home;