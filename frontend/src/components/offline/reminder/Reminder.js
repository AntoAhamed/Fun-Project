import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'
import { useNavigate } from 'react-router-dom';

const ReminderApp = (props) => {
    const { time, mode, reminders, addReminder, removeReminder, reminderText, setReminderText, reminderTime, setReminderTime, calculateTimeLeft } = props;

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Reminder - User Guide</h1>
                    <p>The Reminder feature allows users to set custom notifications based on specific dates and times, ensuring important tasks or events are not missed. Below are the detailed instructions for using this feature:</p>

                    <h4>Key Features:</h4>
                    <p>- Set Reminder Message: Users can define a specific message that describes the reminder (e.g., "Doctor's Appointment" or "Project Deadline").</p>
                    <p>- Set Time and Date: Users can choose the exact date and time when they wish to receive the reminder notification.</p>
                    <p>- Multiple Reminders: Users can add and manage multiple reminders, each with unique messages, times, and dates.</p>

                    <h4>How to Use the Reminder Feature:</h4>
                    <h5>1. Access the Reminder Section:</h5>
                    <p>- Navigate to the "Reminder" feature in the application.</p>

                    <h5>2. Adding a New Reminder:</h5>
                    <p>- Step 1: Enter the <b>Reminder Message</b> in the input field (e.g., "Meeting with John").</p>
                    <p>- Step 2: Select the <b>Date</b> and <b>Time</b> for when you want the reminder to trigger.</p>
                    <p>- Step 3: Click the "Save Reminder" button to store your reminder.</p>

                    <h5>3. Viewing and Managing Reminders:</h5>
                    <p>- Your saved reminders will be displayed in a list.</p>
                    <p>- Each reminder will show the <b>message</b>, <b>date</b> and <b>time</b>.</p>
                    <p>- You can click on a reminder to <b>delete</b> it as needed.</p>

                    <h5>4. Notifications:</h5>
                    <p>- When the set date and time of a reminder is reached, the application will notify you with the corresponding message.</p>

                    <p>This feature is designed to help users stay organized and keep track of important events in a timely manner.</p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <h2 className="fs-1 fw-bold mb-4">Set Reminders</h2>
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
                            Save Reminder
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
