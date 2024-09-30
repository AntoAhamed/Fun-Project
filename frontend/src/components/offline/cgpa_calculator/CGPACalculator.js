import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import Results from './Results';
import clock_img from '../../../assets/clock.jpeg'
import { useNavigate } from 'react-router-dom';

const CGPACalculator = (props) => {
    const { mode } = props;

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

    const handleReset = () => {
        setGrades([])
        setCgpa(null)
    }

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
                    <h1 className='fs-1 fw-bold text-center mb-3'>CGPA Calculator</h1>
                    <h4>Details:</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <h4>Instructions:</h4>
                    <p>
                        1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <div className='d-flex flex-column align-items-center mt-4'>
                            <h1 className='fs-1 fw-bold mb-4'>CGPA Calculator</h1>
                            {grades.map((grade, index) => (
                                <p key={index}>S: {grade.subject} - C: {grade.credit} - G: {grade.gradePoint}</p>
                            ))}
                            <InputForm addGrade={addGrade} />
                            <button className='btn btn-primary rounded-pill mb-2' onClick={calculateCGPA}>Calculate CGPA</button>
                            {cgpa && <Results cgpa={cgpa} />}
                            {grades.length > 0 && <button className='btn btn-sm btn-primary rounded-pill mb-2' onClick={handleReset}>Reset</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CGPACalculator;
