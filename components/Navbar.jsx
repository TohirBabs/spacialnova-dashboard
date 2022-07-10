import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      page: false,
      landing: false,
      docs: false,
      new: false,
      utility: false,
      user: false,
      work: false,
      blog: false,
      carr: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  // componentDidMount() {
  //   var matchingMenuItem = null;
  //   var ul = document.getElementById("top-menu");
  //   var items = ul.getElementsByTagName("li");
  //   for (var i = 0; i < items.length; ++i) {
  //     if (this.props.location.pathname === items[i].pathname) {
  //       matchingMenuItem = items[i];
  //       break;
  //     }
  //   }
  //   if (matchingMenuItem) {
  //     this.activateParentDropdown(matchingMenuItem);
  //   }
  // }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active");
      const parent1 = parent.parentElement;
      parent1.classList.add("active");
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active");
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active");
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active");
          }
        }
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div>
              <Link className="logo" href="/">
                <img src="/img/spaciallogo.png" alt="" />
                {/* Spacial<span className="text-primary">Nova</span>. */}
              </Link>
            </div>

            <div className="buy-buttons">
              <div className="buy-button">
                <a
                  href="https://spacialnova-dashboard.netlify.app/sign-in"
                  className="btn btn-primary"
                >
                  Dashboard
                </a>
              </div>
              {/* <div className="buyer-button">
                <a
                  href="https://spacialnova-dashboard.netlify.app/book-appointment"
                  className="btn "
                >
                  Book Appointment
                </a>
              </div> */}
            </div>

            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  href="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              id="navigation"
              style={{
                display: this.state.isOpen ? "block" : "none",
              }}
            >
              <ul className="navigation-menu" id="top-menu">
                <li>
                  <Link href="/#home">Home</Link>
                </li>
                <li>
                  <Link href="/#purpose">Purpose</Link>
                </li>
                <li>
                  <Link href="/#solution">Solution</Link>
                </li>
                {/* <li>
									<Link href="/#trial">Trial</Link>
								</li>
								*/}
                <li>
                  <Link href="/#team">Team</Link>
                </li>
                <li>
                  <Link href="/#latest">Latest</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
