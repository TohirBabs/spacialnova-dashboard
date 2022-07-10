import React from "react";
import Link from "next/link";

const book = () => {
  return (
    <div className="lg:flex font-sec">
      <div className="w-35 xl:max-w-screen-lg bg-blueGray-200 ">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full px-4 relative flex flex-col min-w-0 break-words w-full mb-6border-0 relative flex flex-col min-w-0 break-words  mb-6 border-0 maxh">
            <div className="rounded-t mb-0 px-10 py-6">
              <img
                alt="..."
                className=" w-logo-sm align-middle border-none mb-6"
                src="/img/spaciallogo.png"
              />
              <div className="text-2xl text-pryblue font-bold">
                Book Appointment
              </div>

              <hr className="mt-2 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div className="relative w-full mb-5">
                  <label
                    className="block  text-blueGray-600 text-base font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 text-base font-bold  text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>
                <div className="relative w-full mb-5">
                  <label
                    className="block text-blueGray-600 text-base font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 text-base font-bold text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-5">
                  <label
                    className="block text-blueGray-600 text-base font-bold text-base font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    className="border-0 px-3 py-3 text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="081-234-56789"
                  />
                </div>
                <div className="flex text-blueGray-600 justify-between text-base font-bold mb-6">
                  <p>Are you a professional pilot?</p>
                  <div className="">
                    <input
                      className="form-checkbox border-0 rounded text-prygreen ml-1 mr-3 w-5 h-5 ease-linear transition-all duration-150"
                      type="radio"
                      id="yes"
                      name="profpilot"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>

                  <div>
                    <input
                      className="form-checkbox border-0 rounded text-prygreen ml-1 mr-3 w-5 h-5 ease-linear transition-all duration-150"
                      type="radio"
                      id="no"
                      name="profpilot"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
                <div className="flex text-blueGray-600 justify-between text-base font-bold mb-6">
                  <p>Do you have a pilot?</p>
                  <div className="">
                    <input
                      className="form-checkbox border-0 rounded text-prygreen ml-1 mr-3 w-5 h-5 ease-linear transition-all duration-150"
                      type="radio"
                      id="yes"
                      name="havepilot"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>

                  <div>
                    <input
                      className="form-checkbox border-0 rounded text-prygreen ml-1 mr-3 w-5 h-5 ease-linear transition-all duration-150"
                      type="radio"
                      id="no"
                      name="havepilot"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="dronecategory"
                    className="block text-blueGray-600 text-base font-bold text-base font-bold"
                  >
                    Select a drone servce category
                  </label>

                  <select
                    name="dronecategory"
                    id="dronecategory"
                    className="border-0 mt-4 px-3 py-3 text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full "
                  >
                    <option value="Field-Management">Field Management</option>
                    <option value="Weed-Dispersion">Weed Dispersion</option>
                    <option value="Real-Estate-Inspection">
                      Real Estate Inspection
                    </option>
                    <option value="Security-Inspection">
                      Security Inspection
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    for="appdate"
                    className="text-blueGray-600 text-base font-bold mb-2"
                  >
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    id="appdate"
                    name="Appointment-Date"
                    className="border-0 mt-4 px-3 py-3 text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full "
                  />
                </div>
                <div className="text-blueGray-600 text-base font-bold mb-6">
                  <label for="apptime">Appointment Time</label>

                  <input
                    type="time"
                    id="apptime"
                    name="apptime"
                    required
                    className="border-0 mt-4 px-3 py-3 text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full "
                  />
                </div>
                <div className="block text-blueGray-600 text-base font-bold text-base font-bold mb-6">
                  <p className="mb-4">Appointment Details</p>
                  <textarea
                    className="border-0 px-3 py-3 text-base font-bold  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="details"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className="btn btn-sec">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-pryblue flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img
            alt="..."
            className="align-middle border-none "
            src="/img/dronewrite.png"
          />
        </div>
      </div>
    </div>
  );
};

export default book;
