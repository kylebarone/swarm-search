import React from 'react'

function About() {
  return (
    <>
    <div className='w-8/12 mb-10'>
      <h1 className='text-6xl mb-2'>Swarm Search</h1>
      <h4 className='text-lg mb'>A web app to help Yellow Jacket Student Athletes with connecting to alumni for opportunties, advice, and networking.</h4>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <ul className='list-disc mt-4 text-lg'>
        <li>
          This is a work in progress
          </li>
          <li><span className="underline mr-1">Exclusive: </span>This app will only be availble to student athletes (& alum upon request)</li>
          <li className='list-disc'>
            <li>
            <span className="underline mr-1">Secure: </span> GT Student athletes will login using their georgia tech email addresses. Rather than keep track of a password, a one time use code will be emailed to them to use for login. 
          Sessions on a verified device will be remembred. This way, we utilize the security of GT emails. 
            </li>
        </li>
        
        
        <li>
        <span className="underline mr-1">Informative & Maintainable: </span>Admins will have a dashboard where they can perform actions. <br/>
           <li className='list-none ml-8 text-md'>
            <li> - manage users (add or remove student athletes)</li>
            <li> - update/refresh the database of connections</li>
            <li> - view analytics breakdown of usage, sucessful connections, sucessful positions gained, total athlete use, individual athlete use etc.</li>
            <li> - post jobs (I might have a connection for posting short and easy apply microinternships as well)</li>
            <li> - more features to come</li>
           </li>
        </li>
      </ul>
      <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h3 className='text-3xl'>
        Cost: $250
      </h3>
      <ul className='list-none ml-3'> 
      <li>
      $150 to spend on running scrapers for the linkedin data of ~6,000 alumni. 
      </li>
      <li>
      $100 to spend on scraping for jobs/majors that are underrepresented on linkedin
      </li>

        </ul>
      </div>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </>
  )
}

export default About