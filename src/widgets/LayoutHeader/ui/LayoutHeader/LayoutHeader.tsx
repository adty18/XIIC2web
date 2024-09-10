import { FC } from "react";
import Menu from "../Menu/Menu";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn-ghost btn text-xl">daisyUI</a>
          </div>
          <Menu
            links={[
              { name: "Home", href: "/" },
              { name: "Member", href: "/Member" },
              { name: "About", href: "/about" },
            ]}
          />
          <div className="flex-none">
            <button className="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default LayoutHeader;
