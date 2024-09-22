import React, { useState } from 'react';
import InputForm from './InputForm';
import Results from './Results';

const CGPACalculator = () => {
    const [grades, setGrades] = useState([]);
    const [cgpa, setCgpa] = useState(null);

    const addGrade = (subject, credit, gradePoint) => {
        setGrades([...grades, { subject, credit: parseFloat(credit), gradePoint: parseFloat(gradePoint) }]);
    };

    const calculateCGPA = () => {
        let totalCredits = 0;
        let weightedSum = 0;

        grades.forEach(grade => {
            totalCredits += grade.credit;
            weightedSum += grade.credit * grade.gradePoint;
        });

        const result = weightedSum / totalCredits;
        setCgpa(result.toFixed(2));
    };

    return (
        <div className='d-flex flex-column align-items-center mt-4'>
            <h1>CGPA Calculator</h1>
            {grades.map((grade, index)=>(
                <p key={index}>{grade.subject} - {grade.credit} - {grade.gradePoint}</p>
            ))}
            <InputForm addGrade={addGrade} />
            <button className='btn btn-primary' onClick={calculateCGPA}>Calculate CGPA</button>
            {cgpa && <Results cgpa={cgpa} />}
        </div>
    );
};

export default CGPACalculator;
