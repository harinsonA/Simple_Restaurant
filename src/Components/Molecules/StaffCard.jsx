import image from '../../Assets/img/About/Jennifer-Soft.jpg'

const StaffCard = ({ id, name, job, description }) => (
    <div className="card mb-3 col-md-6">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} alt={name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="">{job}</h6>
                    <p className="card-text">{description}</p>                    
                </div>
            </div>
        </div>
    </div>
)

export default StaffCard;