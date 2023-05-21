
import img8 from "../../../assets/galleryImage/g8.jpg"
import img9 from "../../../assets/galleryImage/g9.jpg"
import img10 from "../../../assets/galleryImage/g10.jpg"
import img11 from "../../../assets/galleryImage/g11.jpg"
import img12 from "../../../assets/galleryImage/g12.jpg"
const Gallery = () => {
    return (
        <div className='text-center my-20'>
            <h2 className='text-purple-600 text-5xl font-bold mb-4'>Gallery</h2>
            <p className="mb-3 w-2/3 mx-auto">Here you will see some smiling face with our customre's child.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt expedita provident error enim pariatur consequatur ad sequi rerum dolores!</p>
            <div className="grid md:grid-cols-3 w-5/6 mx-auto gap-6">          
                <div className=" w-80 shadow-3xl">
                   <figure>< img className=" rounded" src={img10} alt="Shoes" /></figure>
                </div>
                <div className=" w-80 shadow-xl">
                   <figure>< img className=" rounded" src={img8} alt="Shoes" /></figure>
                </div>
                <div className=" w-80 shadow-xl">
                   <figure>< img className=" rounded" src={img10} alt="Shoes" /></figure>
                </div>
                <div className="w-80 shadow-xl">
                   <figure>< img className=" rounded" src={img11} alt="Shoes" /></figure>
                </div>
                <div className=" w-80 shadow-xl">
                   <figure>< img className=" rounded" src={img9} alt="Shoes" /></figure>
                </div>
                <div className=" w-80 shadow-xl">
                   <figure>< img className=" rounded" src={img12} alt="Shoes" /></figure>
                </div>
                
            </div>


        </div>
    );
};

export default Gallery;