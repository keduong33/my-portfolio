import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";
import { GaEventAction, GaEventCategory } from "../googleAnalytics";

const NavBarOptions = () => (
  <>
    <li>
      <Link
        to="experiences"
        offset={-80}
        href="#experiences"
        onClick={() =>
          gtag("event", GaEventAction.InterestClick, {
            event_category: GaEventCategory.Interest,
            event_label: "Experiences",
          })
        }
      >
        Experiences
      </Link>
    </li>
    <li>
      <Link
        to="projects"
        href="#projects"
        onClick={() =>
          gtag("event", GaEventAction.InterestClick, {
            event_category: GaEventCategory.Interest,
            event_label: "Projects",
          })
        }
      >
        Projects
      </Link>
    </li>
    <li className="lg:w-[156px]">
      <details className="">
        <summary>Socials</summary>
        <ul className="px-2 !mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/ke-duong/"
              target="_blank"
              onClick={() =>
                gtag("event", GaEventAction.InterestClick, {
                  event_category: GaEventCategory.SocialInterest,
                  event_label: "LinkedIn",
                })
              }
            >
              <LinkedinLogo />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/keduong33"
              target="_blank"
              onClick={() =>
                gtag("event", GaEventAction.InterestClick, {
                  event_category: GaEventCategory.SocialInterest,
                  event_label: "GitHub",
                })
              }
            >
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
          <li className="pointer-events-none disabled">
            <a href="#readings">Reading List</a>
          </li>
          <li className="pointer-events-none disabled">
            <a href="#quotes">Favorite Quotes</a>
          </li>
        </ul>
      </details>
    </li>
  </>
);

function NavBar() {
  return (
    <div className="sticky top-0 z-10 justify-between p-0 px-4 navbar bg-base-100">
      <div className="justify-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
      <div className="justify-end hidden pr-2 md:block lg:pr-4">
        <ul className="gap-5 menu menu-horizontal lg:menu-lg">
          <NavBarOptions />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
