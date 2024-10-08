import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import Results from './Results';
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
                    <h1 className='fs-1 fw-bold text-center mb-3'>CGPA Calculator - User Guide</h1>
                    <p>The CGPA Calculator feature allows students to effortlessly calculate their Cumulative Grade Point Average (CGPA) based on their individual course grades and credit hours. This feature provides an efficient and accurate way to track academic performance over multiple semesters.</p>

                    <h4>Key Features:</h4>
                    <p>- Enter Course Details: Input the grade and credit hours for each course.</p>
                    <p>- Multiple Semesters: Add courses from multiple semesters to calculate the overall CGPA.</p>
                    <p>- Accurate Calculation: The system computes the CGPA based on your grades and the corresponding credit hours.</p>

                    <h4>How to Use the CGPA Calculator:</h4>
                    <h5>1. Access the CGPA Calculator Section:</h5>
                    <p>- Navigate to the "CGPA Calculator" feature on the application.</p>

                    <h5>2. Adding Course Information:</h5>
                    <p>- Enter the Course Name (optional) for easy identification.</p>
                    <p>- Input the Grade you achieved in the course (e.g., A, B, C, etc.).</p>
                    <p>- Input the Credit Hours assigned to that course (e.g., 3, 4, etc.).</p>
                    <p>- Click the "Add Course" button to save the course information.</p>

                    <h5>3. Calculating CGPA:</h5>
                    <p>- After you have added all the courses for the semester, click the "Calculate CGPA" button to compute the CGPA based on your grades and credit hours.</p>
                    <p>- The formul used is: </p>
                    <p>- Repeat the process for multiple semesters to get an accurate overall CGPA</p>

                    <h5>4. Viewing and Resetting:</h5>
                    <p>- The calculated CGPA will be displayed immediately.</p>
                    <p>- To reset the calculator or start over, simply click the "Reset" button to clear all fields.</p>

                    <p>This CGPA calculator is an essential tool for students, providing a quick and accurate way to keep track of academic performance and ensure that you’re on track for your academic goals.</p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <div className='d-flex flex-column align-items-center mt-4'>
                            <h1 className='fs-1 fw-bold mb-4'>CGPA Calculator</h1>
                            <table className="table border border-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grades.map((grade, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{grade.subject}</td>
                                            <td>{grade.credit}</td>
                                            <td>{grade.gradePoint}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
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
