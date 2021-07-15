import React from 'react';
import './assets/style/main.scss'
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalendarMonth from './modules/calendar/components/CalendarMonth';
import { Provider } from 'react-redux';
import store from "./store"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <CalendarMonth />
        <ToastContainer />
      </Container>
    </Provider>
  );
}

export default App;
