import FooterCard from "../Molecules/FooterCard";
import Resumen from "../Molecules/ResumenCard";
import FoodGrid from "../Organisms/FoodGrid";

// Import imagenes
import img_footer from '../../Assets/img/Home/footer.jpg'


const Home = () => (
    <div className='container b-container'>
        <Resumen />
        <FoodGrid />
        <FooterCard img_footer={img_footer} />
    </div>
)
export default Home;