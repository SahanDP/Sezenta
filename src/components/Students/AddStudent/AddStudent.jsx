import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let AddStudent = () => {
  const [userData, setUserData] = useState({
    name: '',
    description: '',
    index: 0,
  });
  const navigate = useNavigate();

  const onSaveData = useCallback(() => {
    axios.post('http://localhost:8000/student/save', userData)
    .then(function (response) {
      console.log(response);
      navigate('/students/list')
    })
    .catch(function (error) {
      console.log(error);
    });
  },[userData]);

  return (
    <React.Fragment>
      <section className="add-student p-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">Create Student</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos ea corrupti dolore culpa eaque assumenda. Laborum
                facilis reiciendis inventore doloribus cupiditate iusto sint.
                Officiis debitis deserunt delectus animi similique impedit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => setUserData({ ...userData, name: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Index"
                    onChange={(e) => setUserData({ ...userData, index: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => setUserData({ ...userData, description: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <button className="btn btn-success" onClick={() => onSaveData()}>Save</button>
                  <Link to={"/students/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddStudent;
