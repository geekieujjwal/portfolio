import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../Images/myLogo.png";
import { navlinkData } from "../data/data";

import { RxHamburgerMenu } from "react-icons/rx";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <header className="flex justify-between md:justify-around items-center p-2 min-h-[80px] h-[15vh] sticky top-0 bg-[#2f3030] z-10">
      <motion.img
        drag
        dragSnapToOrigin={true}
        src={logo}
        className="h-full mix-blend-lighten cursor-pointer brightness-200"
        alt=""
      />
      <div className=" gap-4 hidden md:flex">
        {navlinkData.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.url}
            className={({ isActive }) =>
              ` hover:text-yellow-500  sm:text-base lg:text-xl ${
                isActive && "text-yellow-500"
              }`
            }
          >
            {item.text}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<RxHamburgerMenu />}
            color="white"
            colorScheme="#2f3030"
          />
          <MenuList
            width="100vw"
            background="#2f3030"
            outline="none"
            border="none"
            paddingLeft="15"
            data-aos-easing="ease-in-out"
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
          >
            {navlinkData.map((item, idx) => (
              <MenuItem background="#2f3030" key={idx}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    ` hover:text-yellow-500  sm:text-base lg:text-xl ${
                      isActive && "text-yellow-500"
                    }`
                  }
                >
                  {item.text}
                </NavLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
