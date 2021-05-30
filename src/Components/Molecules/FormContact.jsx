

const FormContact = () => (
    <form>
        <div className="form-group">
            <input type="text" className="form-control border-top-0 border-right-0 border-left-0" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
            <input type="email" className="form-control border-top-0 border-right-0 border-left-0" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
            <textarea className="form-control border-top-0 border-right-0 border-left-0" id="message" rows="3" placeholder="Message"></textarea>
        </div>
        <div className="form-group d-flex flex-row-reverse">
            <button type="submit" className="btn btn-success pl-4 pr-4 text-align-left">Send</button>
        </div>
    </form>
)

export default FormContact;