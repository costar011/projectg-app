import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
  width: 300px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const EmailForm = () => {
  return (
    <FormContainer>
      <FormField>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" name="email" />
      </FormField>
      <SubmitButton type="submit">보내기</SubmitButton>
    </FormContainer>
  );
};

export default EmailForm;
