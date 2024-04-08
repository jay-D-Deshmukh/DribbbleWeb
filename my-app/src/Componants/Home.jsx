import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { AiOutlineMail } from 'react-icons/ai';
function Home() {
  return (
    <div>
      <Navigation/>
      <div>
      <div className="mt-14 flex flex-col min-h-screen">
            <div className="text-center flex-grow">
                <h1 className="text-3xl font-bold mb-4">Please verify your email...</h1>
                <div className='flex pt-6 justify-center'><AiOutlineMail className="text-6xl text-gray-600" /></div>
                <div className='pt-6 text-sm text-gray-600'>Please verify your email address. We've send a confirmation email to:</div>
                <div className='pt-6 text-sm font-bold text-gray-950'>account@refeo.design</div>
                <div className='pt-6 text-sm text-gray-600'>Click the conformation link in that email to begin using Dribbble.</div>
                <div className='pt-6 text-sm text-gray-600'>Didn't receive the email? Check your Spam floder, it may have been caught by a filter. if<br/>
                you still dont't see it, you can <span className='text-pink-700 font-medium'>resend the confirmation email.</span></div>
                <div className='pt-6 text-sm text-gray-600'>Wrong email address? <span className='text-pink-700 font-medium'>Change it.</span></div>
                
            </div>
        </div>
      </div>
       <Footer/>
    </div>
  )
}

export default Home
