import React from 'react'

function Alert(props) {
    const { alertMssg } = props;

    return (
        <div className="alert alert-success m-0" role="alert">
            {alertMssg}
        </div>
    )
}

export default Alert
