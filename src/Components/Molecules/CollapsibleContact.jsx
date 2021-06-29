import React, { useState, useEffect } from 'react'

const CollapsibleContact = ({ id, title, description, head, collapse }) => {

    const [cambiar, setCambiar] = useState(true)

    const cambiarIcon = event => {
        setCambiar(cambiar ? false : true)
    }


    return (
        <div className="accordion accordion-w col-md-8" id={id}>
            <div className="accordion-item accordion-w">
                <h2 className="accordion-header" id={head}>
                    <button 
                        className="accordion-button btn-acordion d-flex justify-content-between" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#${collapse}`}
                        aria-expanded="true" 
                        aria-controls={collapse}
                        onClick={cambiarIcon.bind(this)}
                    >
                        <div>
                            {title}
                        </div>
                        <div>
                            {
                                cambiar ? <i className="fas fa-caret-left"></i> : <i class="fas fa-caret-down"></i>
                            }
                        </div>
                    </button>
                </h2>
                <div id={collapse} className="accordion-collapse collapse" aria-labelledby={head} data-bs-parent={`#${id}`}>
                    <div className="accordion-body">
                        <p className="text-description-accordion">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CollapsibleContact;