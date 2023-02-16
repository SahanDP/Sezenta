import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

let ViewStudent = () => {
  const [userData, setUserData] = useState([]);
  let { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/student/get/'+ id)
            .then(function (response) {
                setUserData(response.data.students);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
  return (
    <React.Fragment>
      <section className="view-contact-intro p-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                voluptatibus ducimus aliquid perspiciatis atque fugit eius,
                porro tempora sequi repudiandae similique illum? Nisi ut
                corporis labore dignissimos, explicabo iusto delectus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-student mt-2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={userData.image}
                alt=""
                className="student-image"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-actioin">
                  <span className="fw-bold">Name</span> :{" "}
                  <span className="fw-bold">{userData.name}</span>
                </li>
                <li className="list-group-item list-group-item-actioin">
                  <span className="fw-bold">Index</span> : {userData.index}
                </li>
                <li className="list-group-item list-group-item-actioin">
                  <span className="fw-bold">Description</span> : {userData.description}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/students/list"} className="btn btn-warning mt-4">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewStudent;
