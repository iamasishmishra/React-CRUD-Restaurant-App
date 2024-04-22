import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/ViewRestaurant.css'
import Table from 'react-bootstrap/Table';

const ViewRestaurant = () => {
    let [data, setData] = useState([])
    let [force, setForce] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:1000/Restaurants')
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
    }, [setForce])

    let removeRestaurant = ((id, name) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${name}?`);
        if (isConfirmed) {
            axios.delete(`http://localhost:1000/Restaurants/${id}`)
                .then((res) => {
                    alert(`${name} Removed Successfully....`);
                    setData(prevData => prevData.filter(restaurant => restaurant.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                    alert("Data not found..");
                });
        }
    })

    let editRestaurant = (id) => {
        navigate(`/editrestaurant/${id}`);
    };

    let addNewRestaurant = () => {
        navigate('/addrestaurant');
    };

    return (
        <div className='viewrestaurant'>
            <h2>Restaurant List</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{restaurant.Name}</td>
                            <td>{restaurant.Address}</td>
                            <td>{restaurant.Pincode}</td>
                            <td>{restaurant.Mobile}</td>
                            <td>{restaurant.Email}</td>
                            <td>{restaurant.Website}</td>
                            <td>
                                <button onClick={() => editRestaurant(restaurant.id)}>Edit</button>
                                <button id="btnid" onClick={() => removeRestaurant(restaurant.id, restaurant.Name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <button onClick={addNewRestaurant}>Add New Restaurant</button>
        </div>
    );
};

export default ViewRestaurant;
