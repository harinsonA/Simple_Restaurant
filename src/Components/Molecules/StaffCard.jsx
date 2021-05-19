const StaffCard = ({ id, name, job, description, image, networks }) => (
    <div className="card mb-3 col-md-6">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={'./image/'+image+'.jpg'} alt={name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="">{job}</h6>
                    <p className="card-text">{description}</p>
                    <div className="networks-social">
                        { networks.facebook ? <div className="network"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></div> : '' }
                        { networks.twitter ? <div className="network"><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></div> : '' }
                        { networks.instagram ? <div className="network"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></div> : '' }
                        { networks.youtube ? <div className="network"><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></div> : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default StaffCard;