import React, { useState } from "react";
import GiveReviews from "./GiveReviews";
import { useContextAPI } from "../Context/UserContextProvider";

const Reviews = () => {
  const [openModal, setOpenModal] = useState(false);
  const { storeData, stars, handleDelete } = useContextAPI();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div>
        <h3>Reviews Section</h3>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            {openModal ? <GiveReviews setOpenModal={setOpenModal} /> : ""}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {storeData?.length
                ? storeData?.map((ele, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{ele?.title}</td>
                      <td>
                        {Array.from({ length: ele?.rating }, (_, index) => (
                          <span key={index}>☆</span>
                        ))}
                      </td>
                      <td>{ele?.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={handleOpenModal}
        type="button"
        className="btn btn-success"
      >
        Give Reviews
      </button>
    </div>
  );
};

export default Reviews;
