import { Link } from "react-router-dom";

const AboutCard = ({ icon, description, color }) => (
    <div className='col-md-4'>
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title mb-5 color-icon-about"><i className={'fas fa-4x fa-' + icon}></i></h5>
                <p className="card-text">{description}</p>
                <Link to="/" className={"rounded-0 btn btn-" + color}>Read More</Link>
            </div>
        </div>
    </div>
)

export default AboutCard;