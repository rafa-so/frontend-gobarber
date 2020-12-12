import React from 'react';
import { Form } from '@unform/web';

import {
  FiMail,
  FiUser,
  FiLock,
  FiArrowLeft
} from 'react-icons/fi';

import {
  Container,
  Content,
  Background
} from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça o seu Cadastro</h1>
          <Input icon={FiUser} name="nome" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Voltar para o logon
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;
