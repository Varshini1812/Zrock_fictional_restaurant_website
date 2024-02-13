import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    seating: "indoor", // Default seating option
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation details:", formData);
    alert("Thank you! Your table has been reserved.");
    // Reset form after submission
    setFormData({
      date: "",
      time: "",
      guests: "",
      seating: "indoor", // Reset to default seating option
    });
  };

  return (
    <div className="reserve">
      <div id="booking" className="reservingtable">
        <h1 className="reserve-title">
          <span>Book</span> a table
        </h1>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="seating">Seating:</label>
          <select
            id="seating"
            name="seating"
            value={formData.seating}
            onChange={handleChange}
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
          <br />
          <br />

          <button type="submit">Reserve Table</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
