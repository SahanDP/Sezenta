import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let EditStudent = () => {
  const [userData, setUserData] = useState({
    name: '',
    description: '',
    index: 0,
  });

  let { id } = useParams();
  const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/student/get/'+ id)
            .then(function (response) {
              delete response.data.students.image;
              setUserData(response.data.students);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setUserData]);

    const onSaveData = useCallback(() => {
      axios.put('http://localhost:8000/student/update/'+ id, userData)
      .then(function (response) {
        console.log(response);
        navigate('/students/list')
      })
      .catch(function (error) {
        console.log(error);
      });
    },[userData]);



  return (
      <section className="add-student p-2">
        <div className="container">
          <div className="row">
            <div className="column">
              <p className="h3 text-success fw-bold">Update Student</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos ea corrupti dolore culpa eaque assumenda. Laborum
                facilis reiciendis inventore doloribus cupiditate iusto sint.
                Officiis debitis deserunt delectus animi similique impedit.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Index"
                    value={userData.index}
                    onChange={(e) => setUserData({ ...userData, index: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={userData.description}
                    onChange={(e) => setUserData({ ...userData, description: e.target.value})}
                  />
                </div>
                <div className="mb-2">
                  <button className="btn btn-success" onClick={() => onSaveData()}>Update</button>
                  <Link to={"/students/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png"
                alt=""
                className="student-image"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default EditStudent;
