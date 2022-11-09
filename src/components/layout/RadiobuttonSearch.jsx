import React from 'react'

function RadiobuttonSearch({ radioChecked, setRadioChecked }) {


    const handleClick = (e) => {
        console.log(e.target.name)
        setRadioChecked(e.target.name)
    }

    return (
        <div className='flex mb-5'>
               <button className='btn btn-grey mr-2' name='People' onClick={handleClick}>People</button>
               <button className='btn btn-grey mr-2' name='Company'  onClick={handleClick}>Company</button>
               <button className='btn btn-grey mr-2' name='Role' onClick={handleClick}>Role</button>
               <button className='btn btn-grey mr-2' name='Major' onClick={handleClick}>Major</button>
               <button className='btn btn-grey mr-2' name='Sport' onClick={handleClick}>Sport</button>
               <button className='btn btn-grey mr-2' name='Internship' onClick={handleClick}>Internship</button>
        </div>
    )
}

export default RadiobuttonSearch