import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium">
            <span className="text-[#614232]">
              <PiBuildingOfficeBold />
            </span>
            No 1. Job Hunt Website
          </span>
          <h2 className="text-5xl font-bold">
            Search, Apply <br /> & Get your
            <span className="text-[#6A38C2]"> Dream Job</span>
          </h2>

          <p>
            Start your hunt for the best, life-changing career opportunities
            from here in your <br />
            selected areas conveniently and get hired quickly.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find your dream job"
              className="outline-none border-none w-full"
            />
            <Button className="rounded-r-full ">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
