import FoodCard from "../Molecules/FoodCard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FoodGrid = () => {

    const [menu, setMenu] = useState([])
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get('https://60860512d14a87001757894c.mockapi.io/restaurant')
            .then(response => {
                console.log(response.data[0].food.Pizza)
                setMenu(response.data[0].food)
                setList(response.data[0].food.Pizza)
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
                    list.map( ({ title, description, price, id, image }) => <FoodCard key={id} title={title} description={description} price={price} image={image} />)
                }
                
            </div>
        </>
    )
}

export default FoodGrid