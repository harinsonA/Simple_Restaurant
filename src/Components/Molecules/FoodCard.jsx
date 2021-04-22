

const FoodCard = ({ title, description, price, image }) => (
    <>
        <div className="card col-md-3 pb-4 border-0" >
            <img src={ image } className="card-img-top" width='100%' alt={ title } />
            <div className="card-body card-food p-0 pt-4">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <h5 className="card-title precio">{ price }</h5>
            </div>
        </div>
        
    </>
)

export default FoodCard;