"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Destinations",
      href: "#",
    },
    {
      name: "Adventure Activities",
      href: "#",
    },
    {
      name: "Travel Tips",
      href: "#",
    },

    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ];
  return (
    <nav className="bg-[#e35336] top-0 z-10 ">
      <div className="flex  flex-wrap  items-center  justify-between  p-4 w-7xl mx-auto">
        <h1 className="text-2xl  font-bold italic ">RoverRoutes</h1>

        {/*Menu Icons */}

        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "close menu" : "open menu"}
            className="focus:outline-none"
          >
            {isOpen ? (
              <RxCross2 size={20} className="text-black  " />
            ) : (
              <CiMenuFries size={20} className="text-black " />
            )}
          </button>
        </div>

        {/* Pc Menu*/}
        <div className=" hidden md:flex  text-lg gap-4 ">
          {menuItems.map((items, index) => (
            <Link
              href={items.href}
              key={index}
              className={`${items.href === pathname ? "bg-white" : "text-black"}
                          p-3 rounded-md hover:underline hover:scale-95 transition-transform `}
            >
              {items.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <button className="bg-orange-400 text-black font-semibold italic text-center py-2 px-4 rounded-lg hover:bg-orange-500">
            Book Now
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col bg-[#e35336] mt-2 p-4 ">
            {menuItems.map((items, index) => (
              <Link
                href={items.href}
                key={index}
                className={`${
                  items.href === pathname ? "bg-white" : "text-black "
                }  p-3 rounded-md   hover:scale-95 transition-transform cursor-pointer hover:underline  `}
                onClick={() => setIsOpen(false)}
              >
                {items.name}
              </Link>
            ))}
            <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold italic text-center px-4 py-2 rounded-lg cursor-pointer">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
