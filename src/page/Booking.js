// alle + Michelle kalender
import React, { useState } from "react";
import "../styles/Booking.css";
import Header from "../components/headers/HeaderBooking.js";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
// Kalender komponent importeres
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
// Popup komponent importeres
import Popup from "reactjs-popup";
// Registrering af Syncfusion license key
import { registerLicense } from "@syncfusion/ej2-base";
import { IoMdArrowDropdown } from "react-icons/io";

const Booking = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setOpen(false);
  };
  const handleMenuthree = () => {
    setOpen(false);
  };
  registerLicense(
    "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diWH5YdXFVQGRdVkE="
  );

  return (
    <div>
      <Header />
      <Navbar />
      <Dropdown />
      {/*Kalender komponent bruges her*/}
      <div className="kalender">
        <DateTimePickerComponent placeholder="Vælg dato og tid"></DateTimePickerComponent>
      </div>
      <div className="kommentarer-form">
        <label htmlFor="">Yderligere kommentarer? </label>
        <input type="Kommentarer" className="form-control" />
        {/*Popup komponent bruges her*/}
        <Popup
          trigger={<button className="book-btn"> Book </button>}
          modal
          nested
        >
          {(close) => (
            <div className="popup">
              <div className="popup-header">
                <h4>Din tid er bekræftet!</h4>
              </div>
              <div className="popup-content">
                Du har booket tid til: den XXX XXX XXX <br></br> Vi glæder os
                til at se dig i salonen!
                <button
                  className="afslut-btn"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Afslut
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Booking;
