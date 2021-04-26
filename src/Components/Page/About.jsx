import Resumen from "../Molecules/ResumenCard";
import FooterCard from "../Molecules/FooterCard"

import img_footer from "../../Assets/img/About/footer.jpg"

const About = () => (
    <div className='container b-container'>
        <Resumen
            title = 'About Simple House'
            description = 'This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'
        />
        <FooterCard 
            img_footer={img_footer} 
            title='History of our restaurant'
            description_one='Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.'
            description_two='Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.'
            textbuttom=''
        />
    </div>
)
export default About;