import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ user: {login, avatar_url} }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt='Profile' />
                    </div>
                </div>
            </div>
            <div>
            <div>
                <h2 className="card-title">{login}</h2>
                <h4 className='text-base-content mb-4'>Engineering @ Hooli</h4>
                <h4 className='text-base-content text-zinc-500'>Class of 2018-2022</h4>
                <h4 className='text-base-content text-zinc-500'>Computer Science</h4>
                <h4 className='text-base-content text-zinc-500'>Swimming</h4>
            </div>
            <a className='btn btn-xs mt-4' href='https://www.linkedin.com/in/tyler-branscombe/' target="_blank">Visit Profile</a>
            </div>
        </div>
    </div>
  )
}

export default UserItem