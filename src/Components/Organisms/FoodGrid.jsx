import FoodCard from "../Molecules/FoodCard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import Imagenes de Galeria
import primera from '../../Assets/img/food-gallery/1.jpg'
// import segunda from '../../Assets/img/food-gallery/2.jpg'
// import tercera from '../../Assets/img/food-gallery/3.jpg'
// import cuarta from '../../Assets/img/food-gallery/4.jpg'
// import quinta from '../../Assets/img/food-gallery/5.jpg'
// import sexta from '../../Assets/img/food-gallery/6.jpg'
// import sectima from '../../Assets/img/food-gallery/7.jpg'
// import octava from '../../Assets/img/food-gallery/8.jpg'





const FoodGrid = () => {

    const [menu, setMenu] = useState([])
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/harinsonA/json_db/food')
            .then(response => {
                setMenu(response.data)
                setList(response.data.Pizza)
            })

    }, [])

    const changeMenu = event => {
        const element = event.target.value;
        setList(menu[element])
    }

    return (
        <>
            <div className="row pb-5 d-flex justify-content-center">
                <div role="group" aria-label="Basic example">
                    <button type="button" value="Pizza" className="btn btn-group mr-3" onClick={changeMenu.bind(this)}>Pizza</button>
                    <button type="button" value="Salad" className="btn btn-group mr-3" onClick={changeMenu.bind(this)}>Salad</button>
                    <button type="button" value="Noodle" className="btn btn-group" onClick={changeMenu.bind(this)}>Noodle</button>
                </div>
            </div>
            <div className='row pb-5'>
                {
                    list.map( ({ title, description, price, id }) => <FoodCard key={id} title={title} description={description} price={price} image={primera} />)
                }
                
            </div>
        </>
    )
}

export default FoodGrid