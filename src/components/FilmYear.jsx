import React, { useState } from "react";
import FilmInfo from "../components/FilmInfo";
import "./Film.css";

const FilmYear = ({ data }) => {
  const [secilenTarih, setSecilenTarih] = useState(null);

  const handleClick = (tarih) => {
    setSecilenTarih(tarih);
  };
  // console.log(secilenTarih);
  return (
    <div className=" container shadow p-3 mb-6 rounded">
      <div className="d-flex">
        <div className=" list">
          {data.map((tarih) => (
            <div key={tarih.id} className="tarih col-sm- ms-5">
              <button
                className="button mb-3 me-3 mt-3 p-1 w-100 fs-5 fw-bold shadow border-white bg-secondary-subtle rounded-2 ani"
                onClick={() => handleClick(tarih.date)}
              >
                {tarih.date}
              </button>
            </div>
          ))}
        </div>
        <div className="container d-flex">
          <FilmInfo selectedDate={secilenTarih} data={data} />;
        </div>
      </div>
    </div>
  );
};

export default FilmYear;
