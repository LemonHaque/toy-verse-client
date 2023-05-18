
import bg2 from "../../../assets/2.jpg"
import bg3 from "../../../assets/3.jpg"
import bg4 from "../../../assets/4.jpg"
import bg5 from "../../../assets/5.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel max-h-[600px]">
                <div id="item1" className="carousel-item relative w-full">

                    <img src={bg2} className="w-full" />
                    <div className="absolute h-full bg-gradient-to-t from-[#151515] to-[rgba(71,7,92,0.22)]  text-center">
                        <div className="p-10 md:px-36 md:pt-36">
                            <h2 className="text-2xl  md:text-5xl  font-bold text-white">Let the Adventure Beign With</h2>
                            <h1 className="text-4xl md:text-7xl font-bold text-purple-600">Toy Verse Cars</h1>
                            <p className="pt-1 md:pt-6 text-white">Get ready to embark on a playful journey that will transform your toy store into a destination that kids and kids-at-heart can't wait to visit. Let's dive in and discover the power of simple yet captivating words that will make your toy store stand out!</p>
                        </div>
                        <div>
                            <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline shadow-purple-500/100 shadow-lg hover:bg-purple-800 text-white font-semibold rounded-lg'>Shop Now</button>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item relative w-full">

                    <img src={bg3} className="w-full" />
                    <div className="absolute h-full bg-gradient-to-t from-[#151515] to-[rgba(71,7,92,0.22)]  text-center">
                        <div className="p-10 md:px-36 md:pt-36">
                            <h2 className="text-2xl  md:text-5xl  font-bold text-white">Let the Adventure Beign With</h2>
                            <h1 className="text-4xl md:text-7xl font-bold text-purple-600">Toy Verse Cars</h1>
                            <p className="pt-1 md:pt-6 text-white ">Get ready to embark on a playful journey that will transform your toy store into a destination that kids and kids-at-heart can't wait to visit. Let's dive in and discover the power of simple yet captivating words that will make your toy store stand out!</p>
                        </div>
                        <div>
                            <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline shadow-purple-500/100 shadow-lg hover:bg-purple-800 text-white font-semibold rounded-lg'>Shop Now</button>
                        </div>
                    </div>

                </div>
                <div id="item3" className="carousel-item relative w-full">

                    <img src={bg4} className="w-full" />
                    <div className="absolute h-full bg-gradient-to-t from-[#151515] to-[rgba(71,7,92,0.22)]  text-center">
                        <div className="p-10 md:px-36 md:pt-36">
                            <h2 className="text-2xl  md:text-5xl  font-bold text-white">Let the Adventure Beign With</h2>
                            <h1 className="text-4xl md:text-7xl font-bold text-purple-600">Toy Verse Cars</h1>
                            <p className="pt-1 md:pt-6 text-white ">Get ready to embark on a playful journey that will transform your toy store into a destination that kids and kids-at-heart can't wait to visit. Let's dive in and discover the power of simple yet captivating words that will make your toy store stand out!</p>
                        </div>
                        <div>
                            <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline shadow-purple-500/100 shadow-lg hover:bg-purple-800 text-white font-semibold rounded-lg'>Shop Now</button>
                        </div>
                    </div>

                </div>
                <div id="item4" className="carousel-item relative w-full">

                    <img src={bg5} className="w-full" />
                    <div className="absolute h-full bg-gradient-to-t from-[#151515] to-[rgba(71,7,92,0.22)]  text-center">
                        <div className="p-10 md:px-36 md:pt-36">
                            <h2 className="text-2xl  md:text-5xl  font-bold text-white">Let the Adventure Beign With</h2>
                            <h1 className="text-4xl md:text-7xl font-bold text-purple-600">Toy Verse Cars</h1>
                            <p className="pt-1 md:pt-6 text-white ">Get ready to embark on a playful journey that will transform your toy store into a destination that kids and kids-at-heart can't wait to visit. Let's dive in and discover the power of simple yet captivating words that will make your toy store stand out!</p>
                        </div>
                        <div>
                            <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline shadow-purple-500/100 shadow-lg hover:bg-purple-800 text-white font-semibold rounded-lg'>Shop Now</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg btn-xs">1</a>
                <a href="#item2" className="btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg btn-xs">2</a>
                <a href="#item3" className="btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg btn-xs">3</a>
                <a href="#item4" className="btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;