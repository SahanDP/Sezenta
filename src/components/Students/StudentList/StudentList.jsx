import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';  //added recently  
import { UserCard } from './UserCard';
import axios from 'axios';

const StudentList = ()=>{
    const [userData, setUserData] = useState([]);
    const getData = useCallback(() => {
        axios.get('http://localhost:8000/student/get')
            .then(function (response) {
                setUserData(response.data.existingStudents);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])
    useEffect(() => {
        getData();
    }, [])
    return (
        <React.Fragment>
            <section className='student-search p-4'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p>
                                    <Link to={'/students/add'} className='btn btn-primary'><i className='fa fa-add me-2'/>Add New Student</Link>
                                </p>
                                <p className='fst fst-italic'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis ea quo rem hic? Maxime, cum voluptas 
                                    fugiat nisi animi modi, veniam corrupti suscipit sint praesentium perferendis earum recusandae voluptates!
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='text' className='form-control' placeholder='Search Students'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type="submit" className='btn btn-outline-dark' value='Search'/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='student-list'>
                <div className="container">
                    <div className="row">
                        {userData.map((e, i) =>
                            <div className="col-md-6"  key={e._id} >
                        
                                <UserCard
                                       
                                        id={e._id} 
                                        name={e.name} 
                                        image={e.image} 
                                        index={e.index}
                                        description={e.description}
                                        onDelete={() => getData()}
                                /> 
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

//d-flex flex-column align-items-center

export default StudentList;