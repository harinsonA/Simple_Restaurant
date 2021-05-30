import ContactCard from "../Molecules/ContactCard";
import FormContact from "../Molecules/FormContact";


const ContactInfo = () => (
    <div className="d-flex justify-content-center">
        <div className="col-md-4 mr-5">
            <FormContact />
        </div>
        <div className="col-md-4">
            <ContactCard />
        </div>
    </div>
)
export default ContactInfo;