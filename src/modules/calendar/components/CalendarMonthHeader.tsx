import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { MONTH_NAME } from '../../../shared/services/Date';
import useCalendarActions from '../hooks/useCalendarActions';
import useCalendarSelectors from '../hooks/useCalendarSelectors';

const CalendarMonthHeader = () => {
  const { selectedMonth, selectedYear } = useCalendarSelectors();
  const { updateMonth } = useCalendarActions();

  const onMonthChange = (e: any) => {
    updateMonth(e.target.value);
  };

  return (
    <div className="calendar-month-header">
      <Row>
        <Col lg={{ span:2, offset: 4 }} >
        <Form.Control as="select" size="sm" onChange={onMonthChange}>
          {
            Array(12).fill(0).map((_: number, i: number) => 
              <option value={ i } selected={selectedMonth === i}>{MONTH_NAME[i]}</option>)
          }
        </Form.Control>        
        </Col>
        </Row>
    </div>
  );
};

export default CalendarMonthHeader;

