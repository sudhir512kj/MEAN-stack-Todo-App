const express = require("express");
const app = express();
const todoRoute = express.Router();

// Todo model
let Todo = require("../models/Todos");

// Add Todo
todoRoute.route("/create").post((req, res, next) => {
  Todo.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Todos based on pagination
todoRoute.route("/").get((req, res) => {
  Todo.find()
    .sort({ _id: -1 })
    .skip(parseInt(req.query.skip))
    .limit(parseInt(req.query.limit))
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log("error");
    });
});

// Get single todo
todoRoute.route("/read/:id").get((req, res) => {
  Todo.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update todo
todoRoute.route("/update/:id").put((req, res, next) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        // console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});

// Delete todo
todoRoute.route("/delete/:id").delete((req, res, next) => {
  Todo.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = todoRoute;
