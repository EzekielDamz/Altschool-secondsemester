import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { useRepoContext } from "../Context/RepoContext";
import ScaleLoader from "react-spinners/ScaleLoader";

import Button from "./Button";
const SingleRepo = () => {
  const { id } = useParams();
  const { RepoByName, setRepoByName } = useRepoContext();
  const { Loading, setLoading } = useRepoContext();

  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${githubToken}`,
            },
          }
        );
        if (!response.ok) {
          console.log("error");
        }
        const data = await response.json();
        setRepoByName(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(RepoByName);
  }, [RepoByName]);
  return (
    <section className="bg-[#0f0f1a] pt-10 pb-[2rem] h-[100svh]">
      <div className="pt-10">
        <h1 className="text-center text-[#1371c7] text-4xl font-bold max-sm:text-2xl">
          {RepoByName.name}
        </h1>
      </div>
      <div className="text-center pt-10">
        <div className="repoData border">
          <h2>ID</h2>
          <h2>{RepoByName.id}</h2>
        </div>
        <div className="repoData border">
          <h2>Branch: </h2>
          <p>{RepoByName.default_branch}</p>
        </div>
        <div className="repoData border">
          <h2>Created_at</h2>
          <h2>{RepoByName.created_at}</h2>
        </div>
        <div className="repoData border">
          <h2>forks</h2>
          <h2>{RepoByName.forks}</h2>
        </div>
        <div className="repoData border">
          <h2>Updated_at</h2>
          <h2>{RepoByName.updated_at}</h2>
        </div>
        <div className="repoData border">
          <h2>Pushed_at</h2>
          <h2>{RepoByName.pushed_at}</h2>
        </div>
        <div className="repoData border">
          <h2>Language</h2>
          <h2>{RepoByName.language}</h2>
        </div>
        <div className="repoData border">
          <h2>Visibility</h2>
          <h2>{RepoByName.visibility}</h2>
        </div>
        <div className="repoData border">
          <h2>File Size </h2>
          <h2>{RepoByName.size}</h2>
        </div>
        <div className="flex justify-between mx-[8rem] max-sm:mx-[5rem] pt-5">
          <Link to={RepoByName.clone_url}>
            <div className="flex gap-2">
              <p className="text-white">Github </p>
              <FiGithub className="text-white text-2xl" />
            </div>
          </Link>
          <div>
            <Link to="/">
              <Button text="Back" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRepo;
