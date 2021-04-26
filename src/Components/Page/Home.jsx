import FooterCard from "../Molecules/FooterCard";
import Resumen from "../Molecules/ResumenCard";
import FoodGrid from "../Organisms/FoodGrid";

// Import imagenes
import img_footer from '../../Assets/img/Home/footer.jpg'


const Home = () => (
    <div className='container b-container'>
        <Resumen 
            title = 'Welcome to Simple House'
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure. Numquam quia nam harum maxime animi natus blanditiis quidem culpa quos suscipit modi sapiente rem veritatis, minima voluptates praesentium, facere fugit. Iste, soluta!'
        />
        <FoodGrid />
        <FooterCard 
            img_footer={img_footer} 
            title='Maecenas nulla neque'
            description_one='Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to talk to us for additional permissions about our templates. Thank you.'
            description_two=''
            textbuttom='Read More'
        />
    </div>
)
export default Home;