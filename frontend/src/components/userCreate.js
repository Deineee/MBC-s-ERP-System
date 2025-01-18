import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup'; 
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  color: #ff4d4f;
  font-size: 14px;
  text-align: center;
`;

const UserCreate = () => {
  const { signup, isLoading, error } = useSignup();

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    position: 'staff',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, middleName, lastName, email, password, position } = formData;
    await signup(firstName, middleName, lastName, email, password, position);
  };

  return (
    <div className="signup-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="position">Position:</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
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
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create User'}
        </button>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default UserCreate;

