import StaffCard from "../Molecules/StaffCard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import JenniferSotf from '../../Assets/img/About/JenniferSoft.jpg'
import DaisyWalker from '../../Assets/img/About/DaisyWalker.jpg'
import FlorenceNelson from '../../Assets/img/About/FlorenceNelson.jpg'
import ValentinaMartin from '../../Assets/img/About/ValentinaMartin.jpg'
import { element } from "prop-types";

const StaffGrid = () => {

    const [staff, setStaff] = useState([])
    const [image, setImage] = useState([])

    useEffect(() => {
        axios.get('https://60860512d14a87001757894c.mockapi.io/restaurant')
            .then(response => {
                setStaff(response.data[0].staff);
                imageStaff(response.data[0].staff)
            })
            
        }, [])
        
        const imageStaff = async (response) =>{
            let data = await response
            let nombre = data.map(({name}) => name.replace(" ", ""))
            console.log(nombre)
    }

    return (
        <div className="row">
            {
                staff.map(({ id, name, job, description, networks }) => <StaffCard key={id} name={name} job={job} description={description} networks={networks} />)
            }
        </div>
    )
}

export default StaffGrid;