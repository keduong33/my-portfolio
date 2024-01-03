import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";

const NavBarOptions = () => (
  <>
    <li>
      <Link to="experiences" offset={-80}>
        Experiences
      </Link>
    </li>
    <li>
      <Link to="projects">Projects</Link>
    </li>
    <li className="lg:w-[156px]">
      <details className="">
        <summary>Socials</summary>
        <ul className="px-2 !mt-0">
          <li>
            <a href="https://www.linkedin.com/in/ke-duong/" target="_blank">
              <LinkedinLogo />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/keduong33" target="_blank">
              <GithubLogo />
              GitHub
            </a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>
          Misc <div className="badge badge-info">Coming soon</div>
        </summary>
        <ul className="px-2 !mt-0">
          <li className="disabled pointer-events-none">
            <a href="#readings">Reading List</a>
          </li>
          <li className="disabled pointer-events-none">
            <a href="#quotes">Favorite Quotes</a>
          </li>
        </ul>
      </details>
    </li>
  </>
);

function NavBar() {
  return (
    <div className="sticky navbar bg-base-100 justify-between top-0 p-0 px-4 z-10">
      <div className="justify-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavBarOptions />
          </ul>
        </div>
        <div className="prose">
          <h1>
            <a className="link link-hover" href="#home">
              Ke Duong
            </a>
          </h1>
        </div>
      </div>
      <div className="justify-end hidden md:block lg:pr-4 pr-2">
        <ul className="menu menu-horizontal lg:menu-lg gap-5">
          <NavBarOptions />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
