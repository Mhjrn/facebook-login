import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="main">
        <div class="info">
            <h1 id="logo">facebook</h1>
            <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
    <div className="right">
            <div className="container">
                <input type="email" className="user" placeholder="Email or phone number" required/>
                <input type="password" className="user" placeholder="Password"required/>
                <button className="login">Log In</button>
                <p className="forgot"><a
                        href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzAxMDYwNjEwLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login">Forgot
                        password?</a></p>
                <div id="line">
                  <p>padam thapa</p>
                    <hr />
                </div>
                <button className="new">Create new account</button>
            </div>
            <p className="last"><a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a
                    Page</a> for a celebrity, brand or business.</p>
        </div>
        </div>
    </>
  )
}      
export default App
