import React from 'react'

function About(props) {
    const {mode} = props;

    return (
        <div className='container'>
            <div className='row mb-3'>
                <div className="col text-center fs-1">
                    <b>Know About Our Story</b>
                </div>
            </div>
            <div className={`row mb-3 bg-${mode}`}>
                <div className='col fs-6 p-5'>
                    <p>
                        Welcome to <strong>Toolbox</strong>, a toolkit application designed to help you stay organized and productive.
                    </p>
                    <p>
                        Hi. I am <b>Md. Nazirul Mobin Ahamed</b>, developer of this application, want to make our daily life easier by organizing useful tools in one place. At <strong>Toolbox</strong>, we understand that taking notes, setting alarms or reminders is an essential part of daily life. Whether you're a student, a professional or just someone who likes to keep things organized, having a reliable and user-friendly toolkit app can make all the difference.

                        I keep in mind when creating this to maintain high-quality that meet the needs of the users. I want to makes it easy to take, organize, and access your things anytime, anywhere.

                        I take pride in my commitment to user privacy and data security. User data will be saved at their own device. So, there is no question in that. This is built on a solid foundation of secure coding practices and I will continuously update our app to ensure that your life will be more easire than before.

                        My goal is to provide user with an exceptional experience that helps to stay focused and productive. I welcome your feedback and suggestions and am committed to continuously improving my app to meet the needs of users.
                    </p>
                    <p>
                        <strong>Thank you</strong> for choosing <strong>Toolbox</strong> as your go-to toolkit app. I am excited to be a part of your journey towards greater productivity and organization.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About