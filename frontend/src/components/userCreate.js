import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useUserContext } from '../hooks/useUserContext';
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
  const { dispatch: userDispatch } = useUserContext();
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    position: 'staff',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, middleName, lastName, email, password, position } = formData;
    
    if (!user || !user.token) {
      setError('User not authenticated. Please log in.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ firstName, middleName, lastName, email, password, position }),
      });

      const json = await response.json();

      if (!response.ok) {
        // If response is not OK, log the message from the server response
        setError(json.message || 'User creation failed');
        return;
      }

      // Dispatch the newly created user to the context
      userDispatch({ type: 'ADD_USER', payload: json });
    } catch (err) {
      setError('An error occurred during user creation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Heading>Create User</Heading>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="middleName">Middle Name:</Label>
          <Input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="position">Position:</Label>
          <Select
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
          </Select>
        </div>

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create User'}
        </SubmitButton>

        {error && <Error>{error}</Error>}
      </Form>
    </Container>
  );
};

export default UserCreate;
