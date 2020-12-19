import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransactions = useTransition(messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    });
  return (
    <Container>
      {messagesWithTransactions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
}

export default ToastContainer;