import React from 'react'
import { useState } from 'react'
import '../Styles/AddRestaurant.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AddRestaurant = () => {

    let [Name, setName] = useState("")
    let [Address, setAddress] = useState("")
    let [Pincode, setPincode] = useState("")
    let [Mobile, setMobile] = useState("")
    let [Email, setEmail] = useState("")
    let [Website, setWebsite] = useState("")

    let alldata = { Name, Address, Pincode, Mobile, Email, Website };

    const navigate = useNavigate();

    let addRestaurant = ((e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/Restaurants', alldata)
            .then((res) => {
                console.log(res);
                alert("Saved Successfully")
                navigate('/');

            })
            .catch((err) => {
                console.log(err);
            })
    })


    return (
        <div className='addrestaurant'>
            <div className="form">
                <form action="" onSubmit={addRestaurant}>
                    <label >
                        Name: <input type="text" required placeholder='Restaurant name' value={Name} onChange={(e) => { setName(e.target.value) }} />
                    </label> <br />

                    <label >
                        Address: <input type="text" required placeholder='Address' value={Address} onChange={(e) => { setAddress(e.target.value) }} />
                    </label><br />

                    <label >
                        Pincode: <input type="number" placeholder='Pincode' value={Pincode} onChange={(e) => { setPincode(e.target.value) }} />
                    </label> <br />

                    <label >
                        Mobile No: <input type="number" placeholder='Mobile No' value={Mobile} onChange={(e) => { setMobile(e.target.value) }} />
                    </label> <br />

                    <label >
                        Email: <input type="email" placeholder='Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                    </label> <br />

                    <label >
                        Website: <input type="url" placeholder='Website' value={Website} onChange={(e) => { setWebsite(e.target.value) }} />
                    </label> <br />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurant