import React from 'react'
import './Styles/ProfileModal.css'
import { useFormik } from 'formik'
import { updateProfileAction } from '../redux/Auth/auth.action'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
const ProfileModal = ({setIsOpen}) => {

    
const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
          
        },
        onSubmit: (values) => {
            console.log(values)
            dispatch(updateProfileAction(values))
        }
    })

    const handleSubmit = (e) => {

        if(formik.values.firstName === "" || formik.values.lastName === ""){
            alert("Empty fields detected")
            e.preventDefault()
        }
        else{
            formik.handleSubmit()   
        }
    }
  return (
    <div className='profile-modal-x'>
    <div className='profile-modal'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='profile-child-1'>
                <div className='profile-child-1-1'>
                <div onClick={() => setIsOpen(false)}>
                        <CloseIcon/>
                    </div>
                    <p>Edit Profile</p>
                   
                </div>
              
                <div>
                    <button className='save-button' type='submit'>Save</button>
                </div>
                </div>
                <div>
                <div className='image-back'>
    <img src="https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_1280.png"/>
    </div>
    <div className='profile-page-2-img ggg'>
        <img className='add-z' src="https://static.vecteezy.com/system/resources/previews/004/439/693/original/avatar-doodle-profile-cartoon-character-vector.jpg"/>
      </div>
                    
                </div>
                <div className='edit-field'>
                
                    <input
                    className='edit-field-1'
                    placeholder='First Name'
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    />
                     <input
                     className='edit-field-1'
                    id='lastName'
                     placeholder='Last Name'
                    name='lastName'
                    label='Last Name'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    />
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default ProfileModal