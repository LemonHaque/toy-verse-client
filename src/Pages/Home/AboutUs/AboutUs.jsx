import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toyImage from '../../../assets/toy1.png';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <img src={toyImage} alt="Toy" className="w-full h-auto" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl text-purple-600 font-bold my-6">About Us</h2>
          <p className="text-lg">
            Toy Verse Innovations, a web-based shopping gateway, is a selective and definitive goal for a wide range of toys.

            With a profound want to contact each heart and achieve each home in America, we have right now dedicated every one of our assets to take into account the American market.

            Established by a gathering of energetic visionaries, Toy Verse is altogether equipped to set new benchmarks in the toy business and has plans to be the main pioneer in not so distant future.

            With experts of the exchange locally available, we work to comprehend the brain research and the need of each being so as to convey the correct toy in the correct hands!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
