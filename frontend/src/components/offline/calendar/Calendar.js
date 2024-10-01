import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths } from 'date-fns';

const Calendar = (props) => {
    const {mode} = props
    
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Get the header showing current month and year
    const renderHeader = () => {
        return (
            <div className="d-flex justify-content-between align-items-center my-3">
                <button className="btn btn-primary rounded-pill" onClick={prevMonth}>
                    Prev
                </button>
                <h4>{format(currentMonth, 'MMMM yyyy')}</h4>
                <button className="btn btn-primary rounded-pill" onClick={nextMonth}>
                    Next
                </button>
            </div>
        );
    };

    // Get the days of the week (Sun, Mon, ...)
    const renderDays = () => {
        const days = [];
        const startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col text-center font-weight-bold" key={i}>
                    {format(addDays(startDate, i), 'EEE')}
                </div>
            );
        }

        return <div className="row">{days}</div>;
    };

    // Render all the dates of the current month in a grid
    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, 'd');
                const cloneDay = day;

                days.push(
                    <div
                        className={`col text-center p-3 ${!isSameMonth(day, monthStart) ? 'text-muted' : ''} ${isSameDay(day, selectedDate) ? 'bg-primary text-white' : ''
                            }`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        {formattedDate}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div>{rows}</div>;
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const isSameDay = (d1, d2) => format(d1, 'yyyy-MM-dd') === format(d2, 'yyyy-MM-dd');
    const isSameMonth = (d1, d2) => format(d1, 'MM-yyyy') === format(d2, 'MM-yyyy');

    return (
        <div>
            <div className="container pt-1 pb-1 rounded" style={{background: `${mode === "light" ? "#bed4e9" : "#0d1a26"}`}}>
                {renderHeader()}
                <div className='border border-light text-dark mb-2' style={{ background: 'aliceblue' }}>
                    {renderDays()}
                    {renderCells()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
