import React from "react";

// components

import CardStorage from "components/Cards/CardStorage.js";

export default function FileStats() {
  return (
    <>
      {/* File */}
      <div className="relative bg-pryred md:pt-32 pb-32  sm:pb-32 pt-6">
        <div className="px-1 md:px-5 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex justify-between">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-5/12 xl:w-5/12 ">
                  <CardStorage
                    statSubtitle=""
                    statTitle="Folders and Files"
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconSrc="/img/folder.png"
                    statIconColor="bg-blueGray-700"
                  />
                </div>
                <div className="lg:w-5/12 xl:w-5/12 ">
                  <CardStorage
                    statSubtitle=""
                    statTitle="Artemis Drop"
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    statIconSrc="/img/folder-cloud.png"
                    statIconColor="bg-blueGray-700"
                  />
                </div>
              </div>
              <div>
                <div className="sm:w-5/12 lg:w-5/12 xl:w-5/12 ">
                  <CardStorage
                    statSubtitle=""
                    statTitle="Upload Folders and Files"
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    statIconSrc="/img/folder-add.png"
                    statIconColor="bg-blueGray-700"
                  />
                </div>
              </div>

              {/* <div className="lg:w-6/12 xl:w-3/12 ">
                <CardStorage
                  statSubtitle="OVERALL PERFORMANCE"
                  statTitle="86.54%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconSrc="/img/percent.png"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
