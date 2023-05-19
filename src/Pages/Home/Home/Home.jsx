import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import StaticCards from "../StaticCards/StaticCards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <StaticCards></StaticCards>
        </div>
    );
};

export default Home;