const express = require("express");
const Students = require("../models/students"); //importing the user model

const router = express.Router(); //invoking router function

//Save a student
router.post("/student/save", (req, res) => {
  // '/student/save' is the path(endpoint) then the callback function
  let newStudent = new Students({ ...req.body, image: 'https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png'}); // instantiate posts through a model

  newStudent.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.status(200).json({
        success: "Student saved successfully",
      });
    }
  });
});

//Get a student
router.get("/student/get", (req, res) => {
  Students.find().exec((err, students) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        existingStudents: students,
      });
    }
  });
});

router.get("/student/get/:id", (req, res) => {
  Students.findById(req.params.id).exec((err, students) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        students: students,
      });
    }
  });
});


//Update a student
router.put("/student/update/:id", (req, res) => {
  console.log(req);
  Students.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...req.body, image: 'https://www.pngkit.com/png/detail/46-462685_people-icons-png-inquiry-icon.png', _id: req.params.id, __v: 0  },
    },
    (err, students) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: err,
        });
      } else {
        return res.status(200).json({
          success: "Updated Successfully",
        });
      }
    }
  );
});

//Delete a student
router.delete("/student/delete/:id", (req, res) => {
  Students.findByIdAndRemove(req.params.id).exec((err, deletedStudent) => {
    if (err) {
      return res.status(400).json({
        message: "Deletion Unsucceeded",
        err,
      });
    } else {
      return res.status(200).json({
        message: "Deleted Successfully",
      });
    }
  });
});

module.exports = router;
