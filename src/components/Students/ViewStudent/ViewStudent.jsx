import React from 'react';
import { Link } from 'react-router-dom';

let ViewStudent = ()=>{
    return (
        <React.Fragment>
            <section className='view-contact-intro p-2'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className='fst-italic'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus ducimus aliquid perspiciatis atque 
                                fugit eius, porro tempora sequi repudiandae similique illum? Nisi ut corporis labore dignissimos, explicabo iusto 
                                delectus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='view-student mt-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" alt="" className='student-image'/>
                        </div>
                        <div className="col-md-8">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-actioin'>
                                    <span className='fw-bold'>Name</span> : <span className='fw-bold'>Dinuka</span>
                                </li>
                                <li className='list-group-item list-group-item-actioin'>
                                    <span className='fw-bold'>Index</span> : 25462
                                </li>
                                <li className='list-group-item list-group-item-actioin'>
                                    <span className='fw-bold'>Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab possimus ea debitis 
                                                                                   error ad temporibus vitae voluptatem quibusdam quidem necessitatibus ex perspiciatis nisi
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/students/list'} className='btn btn-warning mt-4'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
};

export default ViewStudent;

/* 

<section className='view-contact mt-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" alt="" className='student-image'/>
                        </div>
                        <div className="col-md-8">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                    name : <span>Sahan</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    index : 22813
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab possimus ea debitis 
                                                  error ad temporibus vitae voluptatem quibusdam quidem necessitatibus ex perspiciatis nisi 
                                                  molestias. Fuga exercitationem voluptatem accusamus provident.
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <Link to={'students/list'} className='btn btn-warning mt-4'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>

*/