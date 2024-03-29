import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    pincode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col py-4  justify-center items-center w-full px-auto bg-[#edf2f4] shadow-slate-50">
      <h2 className="text-2xl font-bold">Application form</h2>
      <form className="  flex flex-col w-[600px] h-[100%] px-10 bg-slate-200 rounded-md" onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="px-5 outline outline-offset-2 outline-1  rounded-md"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          placeholder="Chinmaya"
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          placeholder="Das"
        ></input>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          id="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="xyz@gmail.com"
        ></input>
        <label htmlFor="country">Country</label>
        <select
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>USA</option>
          <option>India</option>
          <option>china</option>
          <option>Pakistan</option>
        </select>

        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          name="street"
          placeholder="Patia,Kanan Vihar"
          id="street"
          onChange={changeHandler}
          value={formData.street}
        ></input>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          name="city"
          placeholder="Bhubaneswar"
          id="street"
          onChange={changeHandler}
          value={formData.city}
        ></input>
        <label htmlFor="state">State/Provinance</label>
        <input
          type="text"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          name="state"
          placeholder="Odisha"
          id="state"
          onChange={changeHandler}
          value={formData.state}
        ></input>
         <label htmlFor="zip">Zip/Pincode</label>
        <input
          type="text"
          className="outline px-5 outline-offset-2 outline-1 rounded-md"
          name="pincode"
          placeholder="751024"
          id="pincode"
          onChange={changeHandler}
          value={formData.pincode}
        ></input>

<fieldset>
          <legend>By Email</legend>
          <div className="flex gap-2">
            <input
              id="comments"
              type="checkbox"
              name="comments"
              onChange={changeHandler}
              checked={formData.comments}
            ></input>
            <div className="mt-5">
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone's comments on post.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              id="candidates"
              type="checkbox"
              name="candidates"
              onChange={changeHandler}
              checked={formData.candidates}
            ></input>
            <div className="mt-5">
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when when candidates applies for job.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              id="offers"
              type="checkbox"
              name="offers"
              onChange={changeHandler}
              checked={formData.offers}
            ></input>
            <div className="mt-5">
              <label htmlFor="offers">Offers</label>
              <p>Get notified new Offers.</p>
            </div>
          </div>
        </fieldset>
        <br/>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler}></input>
          <label htmlFor="pushEverything">Everything</label><br/>
          <input type="radio" id="pushEmail" name="pushNotification" value="Same as Email" onChange={changeHandler}></input>
          <label htmlFor="pushEmail">Same as Email</label><br/>
          <input type="radio" id="pushNothing" name="pushNotification" value="No push Notifications" onChange={changeHandler}></input>
          <label htmlFor="pushNothing">No push Notification</label>
          
        </fieldset>

        <button className="rounded-lg mx-auto h-[40px] w-[100px] bg-blue-500 text-white rounder
        d font-bold py-2 px-4 outline outline-cyan-2 outline-4">Save</button>
      
      </form>
    </div>
  );
};

export default App;
