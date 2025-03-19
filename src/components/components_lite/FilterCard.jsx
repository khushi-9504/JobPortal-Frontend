import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolkata",
      "Chennai",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Surat",
      "Nagpur",
      "Jaipur",
      "Lucknow",
      "Visakhapatnam",
      "Bhopal",
      "Indore",
      "Nashik",
      "Vadodara",
      "Gandhinagar",
      "Rajkot",
      "Mysore",
      "Remote",
      "On-Site",
      "Hybrid",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "IT",
      "Finance",
      "Marketing",
      "Healthcare",
      "Education",
      "Manufacturing",
    ],
  },

  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200+k"],
  },

  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7years", "7+years"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h2 className="font-bold text-lg">{data.filterType}</h2>
            {data.array.map((item, index) => (
              <div className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item}></RadioGroupItem>
                <label>{item}</label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
