const NavBarOptions = () => (
  <>
    <li>
      <a>Experiences</a>
    </li>
    <li>
      <a>Projects</a>
    </li>
    <li>
      <details>
        <summary>Socials</summary>
        <ul className="p-2">
          <li>
            <a>LinkedIn</a>
          </li>
          <li>
            <a>GitHub</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Misc</summary>
        <ul className="p-2">
          <li>
            <a>Reading List</a>
          </li>
          <li>
            <a>Favorite Quotes</a>
          </li>
        </ul>
      </details>
    </li>
  </>
);

function NavBar() {
  return (
    <div className="sticky navbar bg-base-100 justify-between top-0 p-0">
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
            <a className="link link-hover">Ke</a>
          </h1>
        </div>
      </div>
      <div className="justify-end hidden md:flex lg:pr-4 pr-2">
        <ul className="menu menu-horizontal lg:menu-lg gap-5">
          <NavBarOptions />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
