import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {
    const [image, setImage] = useState("");
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Fruits"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = {
            name: data.name,
            description: data.description,
            price: Number(data.price),
            category: data.category,
            image: image  // Now sending image as URL
        };
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Fruits"
            });
            setImage("");
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Image URL</p>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image URL"
                        required
                    />
                    {image && <img className='image-preview' src={image} alt="Preview" />}
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select className='selectt' onChange={onChangeHandler} name="category">
                            <option value="Dairy products">Dairy products</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Vegetables">Vegetables</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input className='inputclasa' onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Tk 20' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default Add;
