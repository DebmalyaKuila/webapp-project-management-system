import React,{useState} from 'react'



const PageContent = ({children}) => {


  return (
    <div className='flex flex-col w-full h-full p-4'>
      {children}
    </div>
  )
}

export default PageContent
