import "./ContactMe.sass"

export default function ContactMe(){
    return(
    <main className="container">
        <div className="contact row">
            <div className="contact-img d-flex justify-content-center col-md-6 pt-5">
                <div className="rounded-circle d-flex justify-content-center align-items-center border border-5" style={{width:"440px",height:"440px"}}>
                    <i className="fa-solid fa-user" style={{fontSize:"220px"}}></i>
                </div>
            </div>
            <div className="contact-box col-md-6 pt-5">
                <h1>Contact Me</h1>
                <p> I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you to create modern site web </p>
                <div className="linkt-to-contact">
                    <ul>
                        <li>
                            <a className="btn-github" href="https://github.com/RedaFarissi/"> 
                                <span><i className="fab fa-github"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-linkedin" href="#"> 
                                <span><i class="fa-brands fa-linkedin-in"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-facebook" href="#"> 
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                            </a>
                        </li>
                        <li>
                            <a className="btn-gmail" href="#"> 
                                <span><i className="fab fa-google"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    )
}