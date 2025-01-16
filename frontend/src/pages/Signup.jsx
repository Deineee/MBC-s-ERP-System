import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import '../css/Signup.css';
const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [position , setPosition ] = useState('staff') // default role
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Send all fields to signup function
    await signup(firstName, middleName, lastName, email, password, position )
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName} 
      />

      <label>Midlle Name:</label>
      <input 
        type="text" 
        onChange={(e) => setMiddleName(e.target.value)} 
        value={middleName} 
      />  

      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLastName(e.target.value)} 
        value={lastName} 
      />

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <label>Position:</label>
      <select onChange={(e) => setPosition(e.target.value)} value={position}>
        <option value="president">President</option>
        <option value="vice-president">Vice President</option>
        <option value="corporate secretary">Corporate Secretary</option>
        <option value="finance officer">Finance Officer</option>
        <option value="purchasing officer">Purchasing Officer</option>
        <option value="warehouse officer">Warehouse Officer</option>
        <option value="human resources">Human Resources</option>
        <option value="store-in-charge">Store in Charge</option>
        <option value="cashier">Cashier</option>
        <option value="sales personnel">Sales Personnel</option>
        <option value="driver">Driver</option>
        <option value="staff">Staff</option>
      </select>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
