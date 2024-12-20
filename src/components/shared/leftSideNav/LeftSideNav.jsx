import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='pl-5'>
            <h3 className='text-2xl my-6'>All Categories</h3>
            {
                categories.map(category => <Link
                to={`/category/${category.id}`}
                className='block text-lg mt-6'
                    key={category.id}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;