import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const ReminderApp = (props) => {
    const { time, mode, reminders, addReminder, removeReminder, reminderText, setReminderText, reminderTime, setReminderTime, calculateTimeLeft } = props;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={clock_img} alt='' className='rounded h-75 w-75' />
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <h2 className="fs-1 fw-bold mb-4">Reminders</h2>
                        {/* Add reminder form */}
                        <div className="form-group text-start">
                            <label>Reminder Message:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={reminderText}
                                onChange={(e) => setReminderText(e.target.value)}
                                placeholder="Enter your reminder"
                            />
                        </div>
                        <div className="form-group text-start mt-3">
                            <label>Reminder Time:</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={reminderTime}
                                onChange={(e) => setReminderTime(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary rounded-pill mt-3" onClick={addReminder}>
                            Add Reminder
                        </button>

                        {/* Display the list of reminders */}
                        <div className="mt-5">
                            <h4 className='fs-4 fw-bold'>Saved Reminders</h4>
                            {reminders.length === 0 ? (
                                <p>No reminders yet.</p>
                            ) : (
                                <ul className="list-group">
                                    {reminders.map((reminder) => (
                                        <li key={reminder.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>{reminder.text}</strong> <br />
                                                <small>{calculateTimeLeft(reminder.time, reminder.text)}</small>
                                            </div>
                                            <button
                                                className="btn btn-danger rounded-pill"
                                                onClick={() => removeReminder(reminder.id)}
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReminderApp;
