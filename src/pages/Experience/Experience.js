import React from 'react'
import "./Experience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa'
import indexEx from './indexc.png'
import bbb from './bbb.png'
import sourced from './sourced.png'
import rogers from './rogers.png'
import google from './google.png'
import mcrl from './mcrl.png'
import aws from './aws.png'

function Experience() {
    return (
        <div className="exp">
            <div className="timeline">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2022 - Aug 2022"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}
                >
                    <img src={aws} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h6 className="vertical-timeline-element-subtitle">Amazon Web Services</h6>
                    <h7 className="vertical-timeline-element-subtitle">Vancouver, ON, Canada</h7>
                    <p>
                        GCP Network Security
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2022 - Apr 2022"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}
                >
                    <img src={google} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h6 className="vertical-timeline-element-subtitle">Google</h6>
                    <h7 className="vertical-timeline-element-subtitle">Durham, NC, United States</h7>
                    <p>
                        GCP Network Security
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2021 - Aug 2021"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}
                >
                    <img src={indexEx} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h6 className="vertical-timeline-element-subtitle">Index Exchange</h6>
                    <h7 className="vertical-timeline-element-subtitle">Toronto, ON, Canada</h7>
                    <p>
                        APIs and Cookie management with Go and frontend UI/UX with Angular.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2020 - Dec 2020"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}

                >
                    <img src={bbb} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h6 className="vertical-timeline-element-subtitle">BigBitBus</h6>
                    <h7 className="vertical-timeline-element-subtitle">Waterloo, ON, Canada</h7>
                    <p>
                        Kubernetes, Docker for infrastructure. Scripts with Python. Backend with Django and PostgreSQL, and frontend with Vue.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2020 - Apr 2020"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}

                >
                    <img src={sourced} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Cloud Analyst</h3>
                    <h6 className="vertical-timeline-element-subtitle">Sourced Group</h6>
                    <h7 className="vertical-timeline-element-subtitle">Toronto, ON, Canada</h7>
                    <p>
                        AWS, Azure, Cloudformation, Terraform, Python
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - Aug 2019"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}

                >
                    <img src={rogers} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Cloud Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Rogers Communications</h4>
                    <h7 className="vertical-timeline-element-subtitle">Brampton, ON, Canada</h7>
                    <p>
                        Research - Cloud / AWS
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="July 2018 - Aug 2018"
                    iconStyle={{ background: '#e0e0e0', color: '#fff' }}
                    icon={<FaBriefcase/>}

                >
                    <img src={mcrl} className="companyIcons" alt=""></img>
                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <h6 className="vertical-timeline-element-subtitle">MCRL Overseas Printing</h6>
                    <h7 className="vertical-timeline-element-subtitle">Mississauga, ON, Canada</h7>
                    <p>
                        SEO Optimization and website UI/UX
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience
