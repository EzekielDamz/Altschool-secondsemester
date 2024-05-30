import React, { useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { useState } from "react";
import { useRepoContext } from "../Context/RepoContext";
import Search from "./Search";
import Button from "./Button";
import { Link } from "react-router-dom";

const FetchRepo = () => {
  const { repoData, setRepoData } = useRepoContext();
  const { setAvater } = useRepoContext();
  const { setLoading } = useRepoContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [repoToDisplay, setRepoToDisplay] = useState([]);
  const [searchRepo, setSearchRepo] = useState("");
// 
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN
  // Display some data when the page mounts
  useEffect(() => {
    const octokit = new Octokit({
      auth: githubToken,
    });
    // Fetching all my data from my Github repository
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

  // show only six Repository When the page mount and on Pagination
  useEffect(() => {
    const filterRepos = repoData.filter((repo) =>
      repo.name.includes(searchRepo)
    );
    const start = currentPage * 6;
    const end = start + 6;
    const ReposList = filterRepos.slice(start, end);
    setRepoToDisplay(ReposList);
    // console.log(ReposList);

    ReposList.forEach((repo) => {
      const repoImage = repo.owner;
      setAvater(repoImage);
      // console.log(avater.data);
    });
    console.log(import.meta.env);
  }, [currentPage, repoData, searchRepo]);

  const totalRepos = repoData.filter((repo) =>
    repo.name.includes(searchRepo)
  ).length;

  const totalPages = Math.ceil(totalRepos / 6);

  // Button function
  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (currentPage > 0) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };
  // Onchange function to enable user to search for a repository
  const handleChange = (event) => {
    event.preventDefault();
    setSearchRepo(event.target.value.trim());
    setCurrentPage(0);
  };

  return (
    <section className="bg-[#0f0f1a] ">
      <div className="flex justify-center py-10 ">
        <Search onChange={handleChange} />
      </div>
      <div className="grid md:grid-cols-3 mx-10 gap-8 max-sm:grid-cols-1 sm:grid-cols-2 ">
        {repoToDisplay.map((repos, index) => (
          <div
            className="w-[100%] border rounded-xl my-3 shadow-[#1371c7] shadow-lg"
            key={index}
          >
            <h2 className="text-center font-bold text-xl text-[#1371c7]  pt-3">
              {repos.name}
            </h2>
            <p className="text-white text-center mx-2">
              {!repos.description
                ? "description not found here .... "
                : repos.description}
            </p>
            <p className="text-white text-center py-2">
              {repos.language === null ? "Javascript" : repos.language}
            </p>
            <div className="text-center pb-3 pt-1 ">
              <Link
                to={`/repositories/${repos.id}`}
                className="text-white font-bold px-5 rounded-lg border "
              >
                View Repos
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-[10rem] pt-[5rem] pb-12 max-sm:gap-[5rem]">
        <Button
          text="Previous "
          handleClick={handlePrev}
          disabled={currentPage === 0}
        />
        <Button
          text="Next"
          handleClick={handleNext}
          disabled={currentPage >= totalPages - 1}
        />
      </div>
    </section>
  );
};
export default FetchRepo;
