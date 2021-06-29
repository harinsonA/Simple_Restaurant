import CopyRight from "../Atoms/CopyRight";
import MapContact from "../Atoms/MapContact";
import Resumen from "../Molecules/ResumenCard";
import CollapsibleContactGrid from "../Organisms/CollapsibleContacGrid";
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
    <CollapsibleContactGrid />
    <CopyRight classnme="copyright" text="Copyright © 2020 Simple House | Design: TemplateMo"/>
    </div>
)

export default Contact;