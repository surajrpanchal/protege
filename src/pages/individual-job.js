import React from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import JobTemplate from '../components/JobTemplate'

const fakeJob = {
  positionTitle : "Junior Developer",
  roleFocus: "Full Stack",
  positionType: "Full-Time",
  company: "Snakehole Lounge",
  howToApply: "mailto:tomhaverford@snakeholelounge.com",
  aboutTheJob: "Here at the Snakehole Lounge we take new devs very seriously. The Snakejuice is free-flowing, the beats are SICK, and the mentorship is on point. We are looking to grow our online presence and go direct-to-consumer eCommerce, so we need a team that is ready to PARTY and make MOVES in the market.",
  requirements: ["Enjoys Snakejuice", "React", "Figma", "AWS", "Postgres"], 
  responsibilities: ["Implements designs from Designers", "Ask for help from Senior Devs", "Ability to double as a bouncer when Eddie is busy"],
  benefits: ['401k Matching', 'Mentorship', 'Path to Mid-Level', 'Free Snakejuice']
}


const IndividualJobPage = () => (
  <div className='flex flex-col mx-auto justify-center'>
    <div className="lg:w-3/5 mx-auto">
      <Link className="flex items-center text-teal-600 mt-12" to={ROUTES.HOME}>
      <svg viewBox="0 0 14 15" className='w-4 h-4 fill-current' xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7852 12.5625C10.4727 13.875 8.8776 14.5312 7 14.5312C5.1224 14.5312 3.51823 13.875 2.1875 12.5625C0.875 11.2318 0.21875 9.6276 0.21875 7.75C0.21875 5.8724 0.875 4.27734 2.1875 2.96484C3.51823 1.63411 5.1224 0.96875 7 0.96875C8.8776 0.96875 10.4727 1.63411 11.7852 2.96484C13.1159 4.27734 13.7812 5.8724 13.7812 7.75C13.7812 9.6276 13.1159 11.2318 11.7852 12.5625ZM7.79297 10.5938L5.71484 8.625H10.7188C10.901 8.625 11.056 8.5612 11.1836 8.43359C11.3112 8.30599 11.375 8.15104 11.375 7.96875V7.53125C11.375 7.34896 11.3112 7.19401 11.1836 7.06641C11.056 6.9388 10.901 6.875 10.7188 6.875H5.71484L7.79297 4.90625C7.92057 4.77865 7.98438 4.6237 7.98438 4.44141C7.98438 4.24089 7.92057 4.07682 7.79297 3.94922L7.49219 3.64844C7.36458 3.52083 7.20964 3.45703 7.02734 3.45703C6.84505 3.45703 6.6901 3.52083 6.5625 3.64844L2.95312 7.28516C2.82552 7.41276 2.76172 7.56771 2.76172 7.75C2.76172 7.93229 2.82552 8.08724 2.95312 8.21484L6.5625 11.8516C6.6901 11.9792 6.84505 12.043 7.02734 12.043C7.20964 12.043 7.36458 11.9792 7.49219 11.8516L7.79297 11.5508C7.92057 11.4232 7.98438 11.2682 7.98438 11.0859C7.98438 10.8854 7.92057 10.7214 7.79297 10.5938Z" />
      </svg>
        <span className='pl-2 font-medium'>
        Back to Job List
        </span>
      </Link>
      <JobTemplate props={fakeJob}/>
    </div>
  </div>
)

export default IndividualJobPage