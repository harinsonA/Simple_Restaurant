import AboutCard from "../Molecules/AboutCard";

const AboutGrid = () => (
    <div className="row mt-2">
        <AboutCard 
            icon={'pepper-hot'} 
            description={'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.'} 
            color={'primary'} 
        />
        <AboutCard 
            icon={'seedling'} 
            description={'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.'} 
            color={'success'} 
        />
        <AboutCard 
            icon={'cocktail'} 
            description={'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.'} 
            color={'danger'} 
        />
    </div>
)

export default AboutGrid