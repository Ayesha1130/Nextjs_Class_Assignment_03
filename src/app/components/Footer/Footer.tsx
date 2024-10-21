import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e35336] bg-opacity-55  rounded-md  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between mt-20 p-5  ">
        <div className="flex flex-col items-start justify-start   mt-5">
        
          <h3 className="text-xl font-semibold hover:text-green-900 italic mb-2  cursor-pointer">
            Stay Connected
          </h3>
          <p className="w-72 md:w-72 lg-w-96 mb-5 mt-2 ">
            Follow us on social media for the latest travel tips, exclusive
            deals, and inspiring stories from fellow travelers!"
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="#">
                <FaFacebook className="size-10 hover:text-blue-800" />
              </a>
            </li>

            <li>
              <a href="#">
                <IoLogoTwitter className="size-10 hover:text-blue-800" />
              </a>
            </li>

            <li>
              <a href="#">
                <FaInstagramSquare className="size-10 hover:text-green-800" />
              </a>
            </li>
          </ul>
        </div>
        

        <div className="flex flex-col mt-5">
          <h3 className="text-xl font-semibold hover:text-green-900 italic cursor-pointer ">
            Contact Us
          </h3>
          <p className="w-72 md:w-72 lg:w-96 mb-5 ">
            For any questions, concerns, or inquiries, please reach out to our
            customer support team.
          </p>
          <p className="cursor-pointer ml-3 mr-1"><strong>Phone</strong>  : 092-0000000</p>
          <p className="cursor-pointer ml-3 mr-1"> <strong>Email</strong> : Rr@gamil.com</p>
        </div>

        <div className="flex flex-col mt-5">
          <h3 className="text-xl font-semibold hover:text-green-900 italic cursor-pointer ">
            About Us
          </h3>
          <p className="w-72 md:w-72 lg:w-96 mb-5 ">
            Discover the history and mission behind RoverRoutes, a travel agency
            committed to creating unforgettable experiences.
          </p>
          <p>Visit our website for more information.</p>
          <Link href="#" className="font-bold italic cursor-pointer ">www.RoverRoutes.com</Link>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <p className="text-xl text-black mb-5">
          �� 2024 RoverRoutes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
