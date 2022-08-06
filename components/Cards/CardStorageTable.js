import React from "react";
import PropTypes from "prop-types";
import CardStorage from "components/Cards/CardStorage.js";

import CardFile from "components/Cards/CardFile.js";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardStorageTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="flex items-center">
          <div className="relative w-auto p-4 flex-initial">
            <div
              className={
                "text-white p-1 text-center inline-flex items-center justify-center w-8 h-8  shadow-lg rounded " +
                "bg-blueGray-700"
              }
            >
              {/* <i className={statIconName}></i> */}
              <img
                alt="..."
                // className=" w-logo align-middle border-none "
                src="/img/folder-w.png"
              />
            </div>
          </div>
          <div className="relative  p-1">
            <span className=" text-base text-white font-sec bolden">
              Folders
            </span>
          </div>
        </div>
        <div className="p-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-between ">
              <div className="w-full lg:w-4/12 mt-4 shadow-lg rounded xl:w-4/12 p-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Seeding flight"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full  mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Pre-planting operations"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Checkup Test"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Forest Surveillance 1"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Forest Surveillance 2"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardStorage
                  statSubtitle=""
                  statTitle="Forest Surveillance 3"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative  px-4">
            <span className=" text-base text-white font-sec bolden">Files</span>
          </div>
        </div>
        <div className="p-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-between ">
              <div className="w-full lg:w-4/12 mt-4 shadow-lg rounded xl:w-4/12 p-2">
                <CardFile
                  statSubtitle=""
                  statTitle="Seeding flight"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full  mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardFile
                  statSubtitle=""
                  statTitle="Pre-planting operations"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
              <div className="w-full mt-4 shadow-lg rounded lg:w-4/12 xl:w-4/12 px-2">
                <CardFile
                  statSubtitle=""
                  statTitle="Checkup Test"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/folder-w.png"
                  statIconColor="bg-blueGray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardStorageTable.defaultProps = {
  color: "light",
};

CardStorageTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
