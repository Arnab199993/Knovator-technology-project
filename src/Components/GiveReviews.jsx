import React from "react";
import { useContextAPI } from "../Context/UserContextProvider";

const GiveReviews = ({ setOpenModal }) => {
  const { handleChange, handleSubmit, state, stars, setState, defaultState } =
    useContextAPI();

  const handleClick = (index) => {
    setState({ ...state, rating: index + 1 });
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "white", padding: "1rem", width: "20rem" }}
      >
        <div className="mb-3">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setOpenModal(false)}
            >
              &#10005;
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your title"
            onChange={handleChange}
            name="title"
            value={state.title}
            required
          />
          <label>Rating</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {stars?.map((ele, index) => (
              <p
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
                style={{ cursor: "pointer", fontSize: "30px" }}
              >
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter Your Description"
            onChange={handleChange}
            name="description"
            value={state.description}
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              handleSubmit();
              setState((prevState) => ({ ...prevState, rating: "" }));
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
          <button
            onClick={() => {
              setState(defaultState);
              setState;
            }}
            style={{ marginLeft: "10px" }}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveReviews;
