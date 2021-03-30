import FooterCard from "../Molecules/FooterCard";
import Resumen from "../Molecules/ResumenCard";
import FoodGrid from "../Organisms/FoodGrid";


const Home = () => (
    <div className='container'>
        <Resumen />
        <FoodGrid />
        <FooterCard />
    </div>
)
export default Home;