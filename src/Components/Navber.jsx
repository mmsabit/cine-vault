import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../asset/logo.png";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navber = () => {
  const navLink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/movies">Movies</Link>
      </li>
      <li>
        <Link href="/tv">TV Shows</Link>
      </li>
      <li>
        <Link href="/cast">Cast</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#131c24]">
      <div className="navbar shadow-sm container mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#D1C5AC]"
            >
              {navLink}
            </ul>
          </div>
          <Link href="/">
            <Image
              src={Logo}
              alt="Cine Vault Logo"
              height={150}
              width={150}
              className="w-auto h-auto"
              priority
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#D1C5AC] font-semibold text-base">{navLink}</ul>
        </div>
        <div className="navbar-end gap-4">
          <label className="input max-w-62.5 w-[50%]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <button className="flex justify-center items-center gap-1">
            <CiBookmark size={25} />
            Wishlist
          </button>
          <div>
            <CgProfile size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
