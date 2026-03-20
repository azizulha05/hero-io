import React from "react";
import footerImg from "../../assets/logo.png";

const Footers = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white p-10">
      <aside className="flex flex-col gap-2">
        <figure className="flex gap-1 items-center">
          <img className="h-8 w-8" src={footerImg} alt="" />
          <a className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
            HERO.IO
          </a>
        </figure>
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footers;
