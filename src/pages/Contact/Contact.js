import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="card">
                <div className="container">
                    <h3>
                        Contact me
                    </h3>
                    <div>
                        📧 Email: simon.zy@yahoo.com
                    </div>

                    <div>
                        📱 Phone: 647-980-5188
                    </div>

                    <div className="colC">

                        <div className="colIconC">
                            <a href="https://www.linkedin.com/in/syz15">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/SimonYanGit">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
