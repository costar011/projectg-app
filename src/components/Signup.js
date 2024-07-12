import React, { useState } from 'react';
import styled from 'styled-components';

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

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 데이터 처리 로직을 추가할 수 있습니다.
    console.log('Form submitted:', { email, password, confirmPassword, name, birthDate, gender });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="birthDate">생년월일</Label>
          <Input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="gender">성별</Label>
          <Input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </FormField>

        <SubmitButton type="submit">회원가입</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
