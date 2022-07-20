import "./FormStripe.scss";
import  { ReactComponent as Me } from './me.svg'


const FormStripe = () => {
    return (
        <div className="form-stripe">
            <div className="main-container">
                <div className="envelop-out">
                    <div className="envelop">
                        <div className="form-container">
                            <form className="form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <h3 className="stripe-title">
                                                Book a Call
                                            </h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="Text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type={Text} name="company" placeholder="Company" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className="form-group justify-content-center">
                                            <button type="submit" name="submit" className="submit-button">Book a Call</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="Me-mymessage">
                    <Me className='SkillLogo__meSVG'></Me>
                    <p>"Risk comes from not knowing what you're doing" Warren Buffett </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormStripe;