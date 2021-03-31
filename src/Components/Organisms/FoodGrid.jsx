import FoodCard from "../Molecules/FoodCard";


const FoodGrid = () => (
    <>
        <div className="row pb-5 d-flex justify-content-center">
            <div role="group" aria-label="Basic example">
                <button type="button" className="btn mr-3">Pizza</button>
                <button type="button" className="btn mr-3">Salad</button>
                <button type="button" className="btn">Noodle</button>
            </div>
        </div>
        <div className='row pb-5'>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </div>
    </>
)

export default FoodGrid