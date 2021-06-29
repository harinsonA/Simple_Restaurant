import CollapsibleContact from "../Molecules/CollapsibleContact";


const CollapsibleContactGrid = () => (
    <div className="d-flex flex-column align-items-center">
        <CollapsibleContact
            id={1}
            head = 'headingOne'
            collapse = 'collapseOne'
            title='1. Fusce eu lorem et dui #09C maximus varius?'
            description='#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.'
        />
        <CollapsibleContact
            id={2}
            head = 'headingTwo'
            collapse = 'collapseTwo'
            title='2. Vestibulum #999 ante ipsum primis in faucibus orci?'
            description='Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.'
        />
        <CollapsibleContact
            id={3}
            head = 'headingthree'
            collapse = 'collapseThree'
            title='3. Can I redistribute this template as a ZIP file?'
            description='Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.'
        />
        <CollapsibleContact
            id={4}
            head = 'headingFour'
            collapse = 'collapseFour'
            title='4. Ut ac erat sit amet neque efficitur faucibus et in lectus?'
            description='Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.'
        />
    </div>
)

export default CollapsibleContactGrid;