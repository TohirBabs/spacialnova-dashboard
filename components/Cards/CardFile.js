import React from "react";
import PropTypes from "prop-types";

export default function CardFile({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconSrc,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 ">
        <div className="flex flex-col p-2">
          <img
            alt="..."
            // className=" w-logo align-middle border-none "
            src="/img/droner.png"
          />
          <div className="flex items-center">
            <div className="relative w-auto p-1 flex-initial">
              <div
                className={
                  "text-white p-1 text-center inline-flex items-center justify-center w-8 h-8 "
                }
              >
                {/* <i className={statIconName}></i> */}
                <img
                  alt="..."
                  // className=" w-logo align-middle border-none "
                  src={statIconSrc}
                />
              </div>
            </div>
            <div className="relative  pl-1">
              <span className=" text-base text-white font-sec bolden">
                {statTitle}
              </span>
            </div>
          </div>
          {/* <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p> */}
        </div>
      </div>
    </>
  );
}

CardFile.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardFile.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
