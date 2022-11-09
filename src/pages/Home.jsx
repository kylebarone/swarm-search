import React, { useState } from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import RadioButtonSearch from '../components/layout/RadiobuttonSearch'

function Home() {
  
  const [radioChecked, setRadioChecked] = useState("People")

  return (
    <>
        {/*search component will go here*/}
        <h1 className='text-6xl mb-2'>Swarm Search</h1>
        <h4 className='text-lg mb w-6/12 mb-10'>A web app to help Yellow Jacket Student Athletes with connecting to alumni for opportunties, advice, and networking.</h4>
        <RadioButtonSearch setRadioChecked={setRadioChecked}/>
        <UserSearch placeholderText={radioChecked}/>
        <UserResults />
    </>
  )
}

export default Home