import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import css from './CalendarHeader.module.css';

const CalendarHeader = ({ handlePrevMonth, currentMonth, handleNextMonth }) => {
  const dateFormat = 'MMMM YYYY';

  return (
    <div className={css.container}>
      <button
        className={css.button}
        type="button"
        onClick={handlePrevMonth}
      >
        <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}>
          <FaChevronLeft />
        </IconContext.Provider>
      </button>
      <h3 className={css.heading}>
        {dateFns.format(currentMonth, dateFormat)}
      </h3>
      <button
        className={css.button}
        type="button"
        onClick={handleNextMonth}
      >
        <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}>
          <FaChevronRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

CalendarHeader.propTypes = {
  handlePrevMonth: PropTypes.func.isRequired,
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  handleNextMonth: PropTypes.func.isRequired,
};

export default CalendarHeader;