import React from 'react'
import logo from './assets/logo.png';
function CoverPage() {
    return (
        <div>
                <div className="cover">
                    <div className='header'>
                        <img id='logo' src={logo} alt="LOGO" />
                        <h1 id='tagline'>Anonymous</h1> 
                    </div>
                </div>
        </div>
    )
}
export default CoverPage
