import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { MONTH_NAME } from '../../../shared/services/Date';
import useCalendarActions from '../hooks/useCalendarActions';
import useCalendarSelectors from '../hooks/useCalendarSelectors';

const CalendarMonthHeader = () => {
  const { selectedMonth, selectedYear } = useCalendarSelectors();
  const { updateMonth, updateYear } = useCalendarActions();

  const onMonthChange = (e: any): void => {
    updateMonth(e.target.value);
  };

  const onYearChange = (e: any): void => {
    const value = Number(e.target.value);
    if(1900 < value && value < 3000) {
      updateYear(e.target.value);
    }
  };
  
  return (
    <div className="calendar-month-header">
      <Row>
        <Col lg={{ span:2, offset: 4 }} >
        <Form.Control as="select" onChange={onMonthChange} value={selectedMonth}>
          {
            Array(12).fill(0).map((_: number, i: number) => 
              <option key={MONTH_NAME[i]} value={ i }>{MONTH_NAME[i]}</option>)
          }
        </Form.Control>
        </Col>
        <Col lg="2">
          <Form.Control value={selectedYear} type="number" min="1900" max="3000" onChange={onYearChange} />
        </Col>
        </Row>
    </div>
  );
};

export default CalendarMonthHeader;

