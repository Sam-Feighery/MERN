import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '', 
    password: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const { email, password} = formData
  return (
    <>
       <section className='heading'>
       <h1>
          <FaSignInAlt /> Login
          <p>Login and start setting goals</p>
          </h1>
       </section>

       <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={email} 
            placeholder="Please enter your email address" 
            onChange={onChange} />
          </div>
        <div className='form-group'>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={password} 
            placeholder="Create a password" 
            onChange={onChange} />
          </div>
        </form>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Login</button>
        </div>
       </section>
    </>
    )
}

export default Login