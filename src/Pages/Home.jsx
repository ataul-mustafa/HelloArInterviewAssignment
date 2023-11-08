import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal'


function Home() {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const closeHandler = () => {
        setOpen(false)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if(user.name && user.password.length > 8){
            setUserData([...userData, user])
            setOpen(false)
        }
    }

    return (
        <div>
            <table>
                <th>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                </th>
                {
                    userData &&
                    userData.map((user, index) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))
                }
            </table>
            <button onClick={() => { setOpen(true) }}>add user</button>
            <Modal
                onClose={closeHandler}
                open={open}
                style={{ height: 220, width: 300, backgroundColor: 'red', color: '#fff' }}

            >
                <form onSubmit={submitHandler}>
                    <h1>Add user Data</h1>
                    <div>
                        <label>Name</label>
                        <input onChange={(e)=>{setUser({...user, name: e.target.value})}} type="text" placeholder='user name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input onChange={(e)=>{setUser({...user, email: e.target.value})}} type="email" placeholder='user email' />
                    </div>
                    <div>
                        <label>password</label>
                        <input onChange={(e)=>{setUser({...user, password: e.target.value})}} type="password" placeholder='user password' />
                    </div>
                    <button>submit</button>
                </form>

            </Modal>
        </div>
    )
}

export default Home