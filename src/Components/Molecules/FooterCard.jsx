import CopyRight from "../Atoms/CopyRight";


const FooterCard = ({ img_footer, title, description_one, description_two, textbuttom }) => (
    <>
        <div className="card col-md-12 p-0 pt-5 pb-4 border-0">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <img src={img_footer} alt="Comida" width='100%' height='100%' />
                </div>
                <div className="col-md-6">
                    <div className="card-body body-readme  pt-0 pb-0">
                        <div>
                            <h5 className="card-title color-azul">{ title }</h5>
                            <p className="card-text color-grey">{ description_one }</p>
                            {
                                description_two? <p className="card-text color-grey mt-5">{ description_two }</p> : <></>
                            }
                        </div>
                        {
                            textbuttom ?
                                <div className="b-button-readme pb-4">
                                    <button type="button" className="btn bg-readmore btn-lg">{ textbuttom }</button>
                                </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
        <CopyRight classnme="copyright" text="Copyright © 2020 Simple House | Design: TemplateMo" />
    </>
)
export default FooterCard;