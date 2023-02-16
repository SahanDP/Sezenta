import React from 'react';
import {Link} from 'react-router-dom';

let AddStudent = ()=>{
    return (
        <React.Fragment>
            <section className='add-student p-2'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create Student</p>
                            <p className='fst-italic'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ea corrupti dolore culpa eaque assumenda. 
                                Laborum facilis reiciendis inventore doloribus cupiditate iusto sint. Officiis debitis deserunt delectus animi 
                                similique impedit.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Photo URL' />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className='form-control' placeholder='Index' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Description' />
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-success' value='Add' />
                                    <Link to={'/students/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddStudent;