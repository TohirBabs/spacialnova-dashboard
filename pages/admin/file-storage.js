import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardDonutChart from "components/Cards/CardDonutChart";
import File from "layouts/File";
import CardStorageTable from "components/Cards/CardStorageTable";

export default function Storage() {
  return (
    <>
      <div className="w-full mb-12 px-4">
        <CardStorageTable color="dark" />
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}

Storage.layout = File;
