import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, ModalBody, ModalHeader, Modal } from "react-bootstrap";

function EditTask() {
  const [show, setShow] = useState(false);
  const initialValues = {
    taskname: "",
    description: "",
    startdate: "",
    enddate: "",
  };

  const [newFormValues, setNewFormValues] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [filterValue, setFilterValue] = useState("");


  newFormValues.filter((user) => user.taskname.toLowerCase().includes(""))


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    setNewFormValues((prevValues) => {
      return [...prevValues, formValues];
    });
    setFormValues(initialValues);
  };

  const deleteValue = (id) => {
    console.log("delete Value");
    setNewFormValues((prevValues) => {
      return prevValues.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id) => {
    let newEditItem = newFormValues.find((elem, index) => {
      return index === id
    })
    console.log(newEditItem);
  }


  const handleModal = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  }

  return (
    <div className="container">
      <div className="searchfilter mt-4">
        <input
          type="text"
          placeholder="Search task by Taskname"
          onChange={(e) => setFilterValue(e.target.value)}
          style={{
            color: "black"
          }}
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Task Name</th>
            <th scope="col">Description</th>
            <th scope="col"> Start time</th>
            <th scope="col">End Time</th>
            <th scope="col">
              <Button onClick={handleModal}>Add</Button>
              <Modal show={show} onHide={handleModal}>
                <ModalHeader closeButton onClick={handleClose}></ModalHeader>
                <ModalBody>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Task Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="taskname"
                        placeholder="task"
                        value={formValues.taskname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlTextarea1">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="description"
                        value={formValues.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-lg-2 col-sm-12 mt-3 ">
                      <label htmlFor="exampleFormControlTextarea1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        placeholder="Date"
                        name="startdate"
                        className="mt-2 border-container"
                        value={formValues.startdate}
                        onChange={handleChange}
                        style={{
                          width: "8vw",
                          height: "2vw",
                          color: "black"
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-sm-12 mt-3">
                      <label htmlFor="exampleFormControlTextarea1">End Date</label>
                      <input
                        type="date"
                        placeholder="Date"
                        name="enddate"
                        value={formValues.enddate}
                        onChange={handleChange}
                        className="mt-2 border-container"
                        style={{
                          width: "8vw",
                          height: "2vw",
                          color: "black"
                        }}
                      />
                    </div>
                    <div className="submit d-flex justify-content-end">
                      <button
                        type="submit"
                        className="submitBtn btn btn-success "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </ModalBody>
              </Modal>
              <Link to="/ViewTask" className="submitBtn btn btn-success mx-2">View Page</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {newFormValues
            .filter((task) => task.taskname.toLowerCase().includes(filterValue))
            .map((items, index) => {
              const { taskname, description, startdate, enddate } = items;
              return (
                <>
                  <tr key={index} id={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{taskname}</td>
                    <td>{description}</td>
                    <td>{startdate}</td>
                    <td>{enddate}</td>
                    <td>

                      <Button onClick={handleModal}>Edit</Button>
                      <Modal show={show} onHide={handleModal}>
                        <ModalHeader closeButton></ModalHeader>
                        <ModalBody>
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">Task Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="taskname"
                                value={formValues.taskname}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group mt-3">
                              <label htmlFor="exampleFormControlTextarea1">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                            <div className="col-lg-2 col-sm-12 mt-3 ">
                              <label htmlFor="exampleFormControlTextarea1">
                                Start Date
                              </label>
                              <input
                                type="date"
                                placeholder="Date"
                                name="startdate"
                                className="mt-2 border-container"
                                value={formValues.startdate}
                                onChange={handleChange}
                                style={{
                                  width: "8vw",
                                  height: "2vw",
                                  color: "black"
                                }}
                              />
                            </div>
                            <div className="col-lg-2 col-sm-12 mt-3">
                              <label htmlFor="exampleFormControlTextarea1">End Date</label>
                              <input
                                type="date"
                                placeholder="Date"
                                name="enddate"
                                value={formValues.enddate}
                                onChange={handleChange}
                                className="mt-2 border-container"
                                style={{
                                  width: "8vw",
                                  height: "2vw",
                                  color: "black"
                                }}
                              />
                            </div>
                            <div className="submit d-flex justify-content-end">
                              <button
                                type="submit"
                                className="submitBtn btn btn-success"
                                onClick={() => editItem(index)}
                              >
                                Save Again
                              </button>
                            </div>
                          </form>
                        </ModalBody>
                      </Modal>
                      <button type="button" className="editButton btn btn-outline-danger mx-2" onClick={() => { deleteValue(index) }} >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default EditTask;