import React,{useState} from 'react';
import PasswordResetEmailForm from '../components/PasswordResetEmailForm';
import PasswordResetCodeForm from '../components/PasswordResetCodeForm';

const PasswordReset = () => {

        const [isVisble,setIsVisible]=useState(true)

  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-300'>
        {
            isVisble ? <PasswordResetEmailForm setIsVisible={setIsVisible}/> :
            <PasswordResetCodeForm/>
        }   
    </div>
  )
}

export default PasswordReset
