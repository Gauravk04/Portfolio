import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-center flex-wrap mb-4">
          <div className="flex flex-col items-center justify-start min-w-[200px] text-center">
            <h6 className="font-bold text-[16px] mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Contact Info
            </h6>
            <ul className="footer-links">
              <li className="flex items-center mb-1 text-yellow-300">
                <i className="fa-solid fa-phone"></i>
                <span className="ml-2">Gaurav K</span>
              </li>
              <li className="flex items-center mb-1 text-yellow-300">
                <i className="fa-solid fa-phone"></i>
                <span className="ml-2">+91 8318614689</span>
              </li>
              <li className="flex items-center mb-1 text-yellow-300">
                <i className="fa-solid fa-envelope"></i>
                <span className="ml-2">gauravakp2001@gmail.com</span>
              </li>
              <li className="flex items-center mb-1 text-yellow-300">
                <i className="fa-solid fa-location-pin"></i>
                <span className="ml-2">Gorakhpur, U.P, India</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-start min-w-[200px] text-center">
            <h6 className="font-bold text-[16px] mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Quick Links
            </h6>
            <ul className="footer-links">
              <li className="mb-1 text-yellow-300">
                <Link href="#">Home</Link>
              </li>
              <li className="mb-1 text-yellow-300">
                <Link href="#about-me">About</Link>
              </li>
              <li className="mb-1 text-yellow-300">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="mb-1 text-yellow-300">
                <Link href="#qualifications">Qualifications</Link>
              </li>
              <li className="mb-1 text-yellow-300">
                <Link href="#contact-details">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-justify text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Thank you for visiting my personal portfolio site. I would really be
            glad to connect with you.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Keep learning and keep rising.
          </p>
        </div>

        <hr className="w-full mb-4" />

        <div className="text-center mb-4">
          <p className="text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Designed with{" "}
            <i className="fa fa-heart pulse" style={{ color: "#e90606" }}></i>{" "}
            by
            <a
              href="https://www.linkedin.com/in/gaurav-k04/"
              className="text-yellow-300 hover:underline"
            >
              {" "}
              Gaurav Kumar
            </a>
            .
          </p>
        </div>

        <div className="text-center mb-[20px] text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          &copy; Gaurav Kumar {new Date().getFullYear()} Inc. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
