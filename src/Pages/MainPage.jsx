import React from "react";
import RepoPage from "../Components/RepoPage";
import FetchRepo from "../Components/FetchRepo";
import { useRepoContext } from "../Context/RepoContext";
import { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Octokit } from "@octokit/rest";
 
const MainPage = () => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  
  const { Loading, setLoading } = useRepoContext();
  const { setRepoData } = useRepoContext();

  useEffect(() => {
    const octokit = new Octokit({
      auth: githubToken,
    });
    octokit
      .request("GET /user/repos")
      .then((response) => {
        setRepoData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setRepoData]);

  return (
    <div className=" bg-[#0f0f1a] ">
      {Loading ? (
        <div className="text-center h-[100svh] pt-[20rem]">
          <ScaleLoader color="#36d7b7" text-2xl />
        </div>
      ) : (
        <div>
          <RepoPage />
          <FetchRepo />
        </div>
      )}
    </div>
  );
};

export default MainPage;
