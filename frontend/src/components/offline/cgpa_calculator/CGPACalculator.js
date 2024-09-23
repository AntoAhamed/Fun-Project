import React, { useState } from 'react';
import InputForm from './InputForm';
import Results from './Results';
import cal_img from '../../../assets/calculator.jpeg'

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
        <div className=''>
            <div className='row'>
                <div className='col text-center'>
                    <img src={cal_img} alt='' width={'100%'} />
                </div>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    <div className='border border-5 rounded text-center' style={{ padding: '10%' }}>
                        <div className='d-flex flex-column align-items-center mt-4'>
                            <h1 className='fs-1 fw-bold mb-4'>CGPA Calculator</h1>
                            {grades.map((grade, index) => (
                                <p key={index} className='fs-4'>S: {grade.subject} - C: {grade.credit} - G: {grade.gradePoint}</p>
                            ))}
                            <InputForm addGrade={addGrade} />
                            <button className='btn btn-primary rounded-pill mb-2' onClick={calculateCGPA}>Calculate CGPA</button>
                            {cgpa && <Results cgpa={cgpa} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CGPACalculator;
