import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/3b882c75-e087-4421-895a-e17584111b8a/PK-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account
