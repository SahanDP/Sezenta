import React from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';  //added recently  

let StudentList = ()=>{
    return (
        <React.Fragment>
            <section className='contact-search p-4'>
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
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                        <div className="col-md-1">
                                            <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                                <i className='fa fa-eye'/>
                                            </Link>
                                            <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                                <i className='fa fa-pen'/>
                                            </Link>
                                            <button className='btn btn-danger'>
                                                <i className='fa fa-trash'/>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row align-items-center'>
                                        <div className="col-md-4">
                                            <img src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png" className='student-image'/>
                                        </div>
                                        <div className="col-md-7">
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
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={'/students/view/:contactID'} className='btn btn-warning'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={'/students/edit/:contactID'} className='btn btn-primary'>
                                            <i className='fa fa-pen'/>
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default StudentList;