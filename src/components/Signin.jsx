import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const App = () => {
  return (
    <Container>
      <Title>이메일</Title>
      <InputContainer>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" name="email" placeholder="이메일을 입력하세요" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
      </InputContainer>
      <Button>로그인</Button>
    </Container>
  );
};

export default App;
