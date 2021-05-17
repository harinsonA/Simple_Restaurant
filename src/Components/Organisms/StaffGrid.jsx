import StaffCard from "../Molecules/StaffCard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const StaffGrid = () => {

    const [staff, setStaff] = useState([])

    useEffect(() => {
        axios.get('https://60860512d14a87001757894c.mockapi.io/restaurant')
            .then(response => {
                setStaff(response.data[0].staff);
            })

    }, [])

    return (
        <div className="row">
            {
                staff.map(({ id, name, job, description, networks }) => <StaffCard key={id} name={name} job={job} description={description} networks={networks} />)
            }
        </div>
    )
}

export default StaffGrid;