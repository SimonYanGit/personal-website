import React from 'react'
import Typical from 'react-typical'
import "./Home.css"
import PFP from './linkedin.jpg'

function Home() {
    return (
        <div className="profile">
            <div className="card">
                <div className="container">
                    <div>
                        <img src={PFP} alt=""></img>
                    </div>
                    <span>
                        <h1>
                            <Typical
                                steps={[
                                    "Hey! I'm Simon 👋",
                                ]}
                            />
                        </h1>
                        <div className="spacing">
                            📚 Currently in 3B studying Computer Engineering at the University of Waterloo 🎓
                            
                        </div>
                        <div className="spacing">
                            💻 I'm a SWE looking to get more experience within the field 😃
                        </div>    
                    </span>
                    <div className="col">

                        <div className="colIcon">
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

export default Home
