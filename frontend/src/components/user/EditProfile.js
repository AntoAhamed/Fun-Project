import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditProfile(props) {
    const navigate = useNavigate()

    const [editedName, setEditedName] = useState('')
    const [editedBio, setEditedBio] = useState('')
    const [editedImage, setEditedImage] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const limit = 1 * 1024 * 1024;

        if (file && file.size > limit) {
            alert("File size exceeds.")
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setEditedImage(reader.result); // Set Base64 string to image state
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editedImage === ''){
            setEditedImage(props.image)
        }

        if(editedName !== ''){
            props.setName(editedName)
            props.setBio(editedBio)
            props.setImage(editedImage)
        }

        setEditedName('')
        setEditedBio('')
        setEditedImage('')

        navigate('/dashboard')
    }

    const handleCancel = () => {
        setEditedName('')
        setEditedBio('')
        setEditedImage('')

        navigate('/dashboard')
    }

    useEffect(()=>{
        setEditedName(props.name)
        setEditedBio(props.bio)
    },[])

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='border rounded p-5 bg-light text-dark' style={{margin: '3% 17%'}}>
            <h1 className='fs-1 fw-bold mb-3'>Edit Profile</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type='text' value={editedName} onChange={(e) => setEditedName(e.target.value)} placeholder='Enter Name' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Bio</label>
                    <textarea className='form-control' rows={'3'} value={editedBio} onChange={(e) => setEditedBio(e.target.value)} placeholder='Enter Bio' />
                </div>
                <div className='mb-3'>
                    <label for="formFile" class="form-label">Choose Image</label>
                    <input class="form-control" type="file" id="formFile" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                </div>
                <button type='submit' className='btn btn-success rounded-pill mb-2'>Save</button>
                <button className='btn btn-dark rounded-pill mb-2 mx-2' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfile
