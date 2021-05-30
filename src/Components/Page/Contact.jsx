import MapContact from "../Atoms/MapContact";
import CollapsibleContact from "../Molecules/CollapsibleContact";
import Resumen from "../Molecules/ResumenCard";
import ContactInfo from "../Organisms/ContactInfo";




const Contact = () => (
    <div className='container b-container'>
    <Resumen 
        title='Contact Page'
        description='You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'
    />
    <ContactInfo />
    <MapContact />
    <Resumen 
        title='FAQs'
        description='This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666'
    />
    <CollapsibleContact />
    </div>
)

export default Contact;