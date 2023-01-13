import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddKelas = () => {
  const [kelas, setName] = useState("");
  const navigate = useNavigate();
 
  const saveKelas = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kelas", {
        kelas,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveKelas}>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kelas"
              />
            </div>
          </div>


          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddKelas;