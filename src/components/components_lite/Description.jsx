import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { useLocation } from "react-router-dom";

const Description = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { singleJob } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);
  const location = useLocation();
  const { logo, companyName } = location.state || {}; // Fallback in case state is undefined

  const isIntiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        console.log(res.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
  console.log("single jobs", singleJob);

  if (!singleJob) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 ">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 my-2">
              <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                  <AvatarImage src={logo}></AvatarImage>
                </Avatar>
              </Button>
              {companyName}
            </div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex gap-2 items-center mt-4">
              <Badge className={"text-blue-600 font-bold"} variant="ghost">
                {singleJob?.position}
              </Badge>

              <Badge className={"text-[#FA4F00] font-bold"} variant="ghost">
                {singleJob?.salary} LPA
              </Badge>

              <Badge className={"text-[#6B3AC2] font-bold"} variant="ghost">
                {singleJob?.location}
              </Badge>

              <Badge className={"text-black font-bold"} variant="ghost">
                {singleJob?.jobType}
              </Badge>
            </div>
          </div>
          <div>
            <Button
              onClick={isApplied ? null : applyJobHandler}
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#6B3AC2] hover:bg-[#552d9b]"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>

        <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
          {singleJob?.description}
        </h1>
        <div className="my-4">
          <div className="font-bold my-1 ">
            <h1>
              Role:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.position} Open Positions
              </span>
            </h1>

            <h1>
              Location:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.location}
              </span>
            </h1>

            <h1>
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.salary} LPA
              </span>
            </h1>

            <h1>
              Experience:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.experience}
              </span>
            </h1>

            <h1>
              Total Applicants:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.applications.length}
              </span>
            </h1>

            <h1>
              Job Type:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.jobType}
              </span>
            </h1>

            <h1>
              Post Date:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.createdAt.split("T")[0]}
              </span>
            </h1>

            {/* <h1>
              Abount Company:
              <span className="pl-4 font-normal text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet consectetur aperiam rerum! Maiores accusamus
                esse dolores dolor doloremque et! Saepe sequi quisquam facere
                temporibus voluptate dolorum neque laboriosam dolor!
              </span>
            </h1>

            <h1>
              Position
              <span className="pl-4 font-normal text-gray-800">
                {singleJob.position}
              </span>
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
