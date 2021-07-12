import React from 'react';
import './assets/style/main.scss'
import { Container } from 'react-bootstrap';
import CalendarMonth from './modules/calendar/components/CalendarMonth';

const App = () => {
  return (
    <Container>
      <CalendarMonth />
    </Container>
  );
}

export default App;
