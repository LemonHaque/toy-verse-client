import img1 from '../../../assets/cardImage/card1.jpg'
import img2 from '../../../assets/cardImage/card2.jpg'
import img3 from '../../../assets/cardImage/card3.jpg'
import img4 from '../../../assets/cardImage/card4.jpg'

const StaticCards = () => {
    return (
        <div className='text-center w-6xl mx-auto  my-20'>
            <h2 className='text-purple-600 text-5xl font-bold mb-12'>Our Facilities</h2>
            <div className='grid md:grid-cols-2 mx-16 md:mx-44 gap-4'>
                <div className="card pt-8 w-96 shadow-xl bg-yellow-100">
                    <figure><img src={img1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Money Back Guarantee</h2>
                        <p>Send Within 30 Days</p>
                    </div>
                </div>
                <div className="card pt-8 w-96 shadow-xl bg-purple-100">
                    <figure><img src={img2} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">24/7 Customer Service</h2>
                        <p>Call us 24/7 @ 000 -123 - 456</p>
                    </div>
                </div>
                <div className="card pt-8 w-96 shadow-xl bg-green-100">
                    <figure><img src={img3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Free Shipping</h2>
                        <p>On Order Over $23 - Full Week</p>
                    </div>
                </div>
                <div className="card pt-8 w-96 shadow-xl bg-sky-100">
                    <figure><img src={img4} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Contacts</h2>
                        <p>+ 01 234 567 89</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticCards;