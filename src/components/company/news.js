import { Column, Grid, Search, Tag } from '@carbon/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    // State to hold fetched data
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:3001", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data) // Correct way to parse JSON
            setNewsData(data); // Store data in state
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Failed to get data:", error);
            setLoading(false); // Stop loading in case of error
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className=' news '>
            <div className=' m-3 p-5 shadow' >
            <Grid>
                <Column lg={16} md={8} sm={4}>
                    <div>
                        <h1 className='h-1 text-success p-2'>News</h1>
                    </div>
                </Column>

                <Column lg={8} md={4} sm={4}>
                    <div className='text-white' >
                        <b>Blogs :</b>
                        All About In
                        <Tag type="blue" size="lg" >news</Tag>
                    </div>
                </Column>

                <Column lg={8} md={4} sm={4}>
                    <div>
                        <Search
                            id='search'
                            labelText="Search"
                            aria-label='Search'
                        />
                    </div>
                </Column>

                <Column lg={16} md={8} sm={4}>
                    <div className='container rounded text-light fw-lighter m-2'>
                        {loading ? (
                            <h1>Loading...</h1> // Show loading text while data is being fetched
                        ) : newsData.length === 0 ? (
                            <h1>There is no News yet!</h1> // Show if no news is available
                        ) : (
                            <div>
                                {newsData.map((blogItem, index) => (
                                    <div key={index}>
                                        {blogItem.posts.map((post) => (
                                            <div key={post.id}>
                                                <h2>{post.title}</h2>
                                                <p>{post.content}</p>
                                                <Link to={`/news/${post.id}`}>Read more</Link>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Column>
            </Grid>
            </div>
        </div>
    );
};

export default News;
