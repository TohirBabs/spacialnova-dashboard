import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-pryblue"
            : "relative") + " pb-2"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-2 border-b-1 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}
                {"  "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="text-white hover:text-prygreen text-base font-bold py-1"
                >
                  <span className="text-prygreen">Spacial</span>
                  <span className="text-pryred"> Nova</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-base font-semibold block py-1 px-3"
                  >
                    Spacial Nova
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-base font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-base font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
