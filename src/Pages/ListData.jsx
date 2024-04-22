import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { FiGithub } from "react-icons/fi";
// import { useState } from "react";
import { useRepoContext } from "../Context/RepoContext";
import ScaleLoader from "react-spinners/ScaleLoader";
import SingleRepo from "../Components/SingleRepo";

const ListData = () => {
  const { name } = useParams();
  // const [RepoByName, setRepoByName] = useState([]);
  const { setRepoByName } = useRepoContext();
  const { Loading, setLoading } = useRepoContext();

  useEffect(() => {
    const FetchRepoData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/EzekielDamz/${name}`
        );

        setRepoByName(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    FetchRepoData();
  }, []);
  return (
    <div className="bg-[#0f0f1a]">
      {Loading ? (
        <div className="text-center py-[20rem]">
          <ScaleLoader color="#36d7b7" />
        </div>
      ) : (
        <div>
          <SingleRepo />
        </div>
      )}
    </div>
  );
};

export default ListData;
