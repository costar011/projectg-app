import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 4px rgba(74, 144, 226, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b7dbe;
  }
`;

const LinkToSignIn = styled(Link)`
  color: #4a90e2;
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, confirmPassword, name, birthDate, gender });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <SubmitButton type="SignUp">회원가입</SubmitButton>
      </form>
      <LinkToSignIn to="/SIGNIN">로그인하기</LinkToSignIn>
    </FormContainer>
  );
};

export default SignUpForm;
