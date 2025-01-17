import React from 'react'
import CoverPage from './CoverPage'
import './AccountSuccessfullPage.css'
import verified from './assets/verified.png'
function AccountSuccessfullPage() {
  return (
    <div>
      <CoverPage/>
      <div id='account-successfull'>
        <img id='verifiedimg' src={verified} alt="verified" />
        <p id='verifiedtext'>Account Created Successfully..!</p>
      </div>
    </div>
  )
}

export default AccountSuccessfullPage
