import  { useEffect } from 'react';
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
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dignissim lectus elit, ac volutpat odio dignissim a. Phasellus
            sollicitudin commodo turpis vitae bibendum. Nunc vulputate orci ac
            mauris bibendum, non rutrum dui aliquet. Nulla facilisi.
          </p>
          <p className="text-lg text-gray-700">
            Sed tempus sagittis mi, vitae molestie lectus pulvinar vitae. Ut at
            cursus nisi. Sed tristique eros non tellus volutpat, vitae rutrum
            mi interdum. Curabitur dapibus arcu eu urna congue, at varius
            neque rhoncus. Sed auctor tincidunt sapien, sit amet varius velit
            rhoncus id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
