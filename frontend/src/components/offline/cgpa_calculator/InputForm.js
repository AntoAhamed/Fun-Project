import React, { useState } from 'react';

const InputForm = ({ addGrade }) => {
    const [subject, setSubject] = useState('');
    const [credit, setCredit] = useState('');
    const [gradePoint, setGradePoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subject && credit && gradePoint) {
            addGrade(subject, credit, gradePoint);
            setSubject('');
            setCredit('');
            setGradePoint('');
        }
    };

    return (
        <form className='d-flex  mb-2' onSubmit={handleSubmit}>
            <input
                className='form-control m-2'
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <input
            className='form-control m-2'
                type="number"
                placeholder="Credit Hours"
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
            />
            <input
            className='form-control m-2'
                type="number"
                placeholder="Grade Point"
                value={gradePoint}
                onChange={(e) => setGradePoint(e.target.value)}
                step="0.01"
            />
            <button className='btn btn-sm btn-primary my-2' type="submit">Add Grade</button>
        </form>
    );
};

export default InputForm;
