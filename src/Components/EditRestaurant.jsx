import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Styles/EditRestaurant.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

let EditRestaurant = () => {
    let [Name, setName] = useState("")
    let [Address, setAddress] = useState("")
    let [Pincode, setPincode] = useState("")
    let [Mobile, setMobile] = useState("")
    let [Email, setEmail] = useState("")
    let [Website, setWebsite] = useState("")


    let param = useParams()
    console.log(param.id);

    useEffect(() => {
        axios.get(`http://localhost:1000/Restaurants/${param.id}`)
            .then((response) => {
                console.log(response.data);
                setName(response.data.Name)
                setAddress(response.data.Address)
                setPincode(response.data.Pincode)
                setMobile(response.data.Mobile)
                setEmail(response.data.Email)
                setWebsite(response.data.Website)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    let data = { Name, Address, Pincode, Mobile, Email, Website };
    const navigate = useNavigate();

    let editItem = ((e) => {
        e.preventDefault();
        axios.put(`http://localhost:1000/Restaurants/${param.id}`, data)
            .then((res) => {
                alert("Data updated ..")
                navigate('/');

            })
            .catch((err) => {
                alert("Error while updating")
            })
    })

    return (
        <div className='editRestaurant'>
            <div className="form">
                <form action="" onSubmit={editItem}>
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

                    <div className="button">
                        <button >Edit Restaurant</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditRestaurant