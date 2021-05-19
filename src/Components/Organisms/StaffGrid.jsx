import StaffCard from "../Molecules/StaffCard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StaffGrid = () => {

    const [staff, setStaff] = useState([])

    useEffect(() => {
        axios.get('https://60860512d14a87001757894c.mockapi.io/restaurant')
            .then(response => {              
                imageStaff(response.data[0].staff);                
            })
            
        }, [])
        
        const imageStaff = async (response) =>{
            let data = await response
            let nombre = data.map(({name}) => name.replace(" ", ""))
            data.forEach(( element, index) => {
                element.image = nombre[index]
            });            
            setStaff(data)
    }

    return (
        <div className="row">
            {
                staff.map(({ id, name, job, description, networks, image }) => <StaffCard key={id} name={name} job={job} description={description} networks={networks} image={image} />)
            }
        </div>
    )
}

export default StaffGrid;