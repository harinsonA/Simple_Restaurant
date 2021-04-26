

const Resumen = ({ title, description}) => (

    <div className="row pt-5 pb-5 justify-content-center">
        <div className="col-md-8">
            <div className="text-center title">
                <h1>{ title }</h1>
            </div>
            <div className="text-center color-grey">
                <p>{ description }</p>
            </div>
        </div>
    </div>
)
export default Resumen;