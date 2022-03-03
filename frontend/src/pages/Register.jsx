import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNagivate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData

  const navigate = useNagivate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
      if(isError) {
        toast.error(message)
      }

      if(isSuccess || user) {
        navigate('/')
      }

      dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, 
        email, 
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
       <section className='heading'>
       <h1>
          <FaUser /> Register
          <p>Please create an account</p>
          </h1>
       </section>

       <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={name} 
            placeholder="Please enter your name" 
            onChange={onChange} />
          </div>
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
        <div className='form-group'>
          <input 
            type="password" 
            className="form-control" 
            id="password2" 
            name="password2" 
            value={password2} 
            placeholder="Confirm password" 
            onChange={onChange} />
          </div>
        </form>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>
       </section>
    </>
    )
}

export default Register