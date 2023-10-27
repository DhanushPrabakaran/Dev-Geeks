"use client";
import React, { useEffect, useRef } from "react";
import logo from "@/public/next.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Profile from "@/public/profilepic.jpeg";
const Header = () => {
  const { data: session } = useSession()
  const inputRef = useRef(null);
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.altKey && event.key === "l") {
      inputRef && (inputRef.current as any).focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });

  return (
    <div className="navbar   h-5 w-auto  border-b border-b-stone-500 bg-base-100">
      <div className="flex-none lg:hidden min-md:visible">
        <button className="btn btn-square btn-ghost">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>

        </button>
      </div>
      <div className=" flex-1 justify-between ">
        <div className="flex items-center justify-between flex-grow mx-1 ">
          <a className=" mr-1  normal-case font-bold from-primary via-primary-focus to-slate-300 ">DevGeeks</a>
          {/* <div className="form-control relative  ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search here..."
              className="input  input-bordered input-sm input-ghost"
            />
            <span className=" absolute right-1 top-1  ">
              <kbd className="kbd kbd-sm ">alt</kbd> +
              <kbd className="kbd kbd-sm">l</kbd>
            </span>
          </div> */}
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-neutral btn-circle avatar">
            <div className="w-7 rounded-full">
              <Image src={ session?.user?.image || Profile} alt="Picture of the author" fill={true} className=" rounded-full" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box w-40"
          >
            <li>
              <a className="justify-center btn-neutral m-1">Profile</a>
            </li>
            <li>
              <a href="/api/auth/signout" className="justify-center btn-error m-1">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
