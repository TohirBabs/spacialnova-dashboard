import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-pryred opacity-70 md:hidden px-3 py-1 text-xl leading-none bg-transparent "
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block md:pb-4 mr-0 inline-block whitespace-nowrap p-2 px-0"
            >
              <img
                alt="..."
                className=" w-logo align-middle border-none "
                src="/img/spaciallogo.png"
              />
              {/* SPACIAL NOVA */}
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-2 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block md:p-4 mr-0 inline-block whitespace-nowrap p-2 px-0"
                    >
                      <img
                        alt="..."
                        className=" w-logo align-middle border-none "
                        src="/img/spaciallogo.png"
                      />
                      {/* SPACIAL NOVA */}
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-pryred opacity-70 md:hidden px-3 py-1 text-xl leading-none bg-transparent "
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-2 md:min-w-full" />

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center mt-2">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "btn btn-primary "
                        : " btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/marketplace") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : " btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-shopping-cart mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/marketplace") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Marketplace
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/notifications") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : "btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-bell mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/notifications") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Notification
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="btn text-pryblue font-sec hover:text-blueGray-500  py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-pryred mr-2"></i>{" "}
                    Profile
                  </a>
                </Link>
              </li>

              <li className="items-center mt-2">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : "btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center mt-2">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : "btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}

            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center mt-2">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-pryblue font-sec hover:text-blueGray-500  py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center mt-2">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-pryblue font-sec hover:text-blueGray-500  py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-pryblue mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {/* <li className="items-center mt-2">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-pryblue font-sec hover:text-blueGray-500  py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li> */}
              <li className="items-center mt-2">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : "btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Settings
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      " py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "btn btn-primary text-lightBlue-500 hover:text-lightBlue-600"
                        : "btn text-pryblue font-sec hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-sign-out-alt mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? ""
                          : "text-pryred")
                      }
                    ></i>{" "}
                    Log out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
