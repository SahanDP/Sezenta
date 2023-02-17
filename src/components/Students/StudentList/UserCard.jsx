import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export const UserCard = (props)=>{
    const navigate = useNavigate();

    const onView = useCallback(() => {
        navigate('/students/view/' + props.id);
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate('/students/edit/' + props.id);
    }, [navigate]);

    const onDelete = useCallback(() => {
        if (window.confirm('Do you want to delete?') == true) {
            axios.delete('http://localhost:8000/student/delete/'+ props.id)
            .then(function (response) {
                props.onDelete();
            })
            .catch(function (error) {
                console.log(error);
            });
          } 
    }, []);


    return (
        <div className="card">
            <div className="card-body">
                <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                        <img src={props.image} alt="" className='student-image'/>
                    </div>
                    <div className="col-md-7">
                        <ul className='list-group'>
                            <li className='list-group-item list-group-item-actioin'>
                                <span className='fw-bold'>Name</span> : <span className='fw-bold'>{props.name}</span>
                            </li>
                            <li className='list-group-item list-group-item-actioin'>
                                <span className='fw-bold'>Index</span> : {props.index}
                            </li>
                            <li className='list-group-item list-group-item-actioin'>
                                <span className='fw-bold'>Description</span> : {props.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                        <button  onClick={() => onView()}  className='btn btn-warning'>
                            <i className='fa fa-eye'/>
                        </button>
                        <button  onClick={() => onEdit()}  className='btn btn-primary mt-2'>
                            <i className='fa fa-pen'/>
                        </button>
                        <button  onClick={() => onDelete()}  className='btn btn-danger mt-2'>
                            <i className='fa fa-trash'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
