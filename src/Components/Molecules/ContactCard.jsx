

const ContactCard = () => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title text-success">Our Address</h4>
            <p className="card-text">180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
        </div>
        <ul className="list-group list-group-flush border-0">
            <li className="list-group-item border-0"><i className="fas fa-phone mr-3"></i> 080-090-0110</li>
            <li className="list-group-item border-0"><i class="fas fa-envelope mr-3"></i> info@company.co</li>
        </ul>
        <div className="networks-social ml-4">
            <div className="network"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></div>
            <div className="network"><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></div>
            <div className="network"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></div>
        </div>
    </div>
)
export default ContactCard;