import React from 'react';

const Results = ({ cgpa }) => {
    return (
        <div>
            <h2 className='fs-2'>Your CGPA: {cgpa}</h2>
        </div>
    );
};

export default Results;
