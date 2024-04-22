import { useEffect } from "react";
import { useRepoContext } from "../Context/RepoContext";
import { Link } from "react-router-dom";

const RepoPage = () => {
  const { avater } = useRepoContext();

  return (
    <section className="py-10 bg-[#0a0a0f] ">
      <div className="float-right flex max-sm:flex-col max-sm:pr-5 sm:px-5">
        <Link
          className="text-[#1371c7]  font-bold underline px-5 max-sm:text-sm text-lg "
          to="/error"
        >
          404Page
        </Link>
        <Link
          to="/errorPage"
          className="text-[#1371c7] text-lg max-sm:text-sm underline font-bold"
        >
          ErrorBoundary
        </Link>
      </div>
      <div className="flex justify-center max-sm:gap-4 sm:gap-5 max-sm:px-5 sm:px-5">
        <div>
          <img
            className=" rounded-full"
            src={avater.avatar_url}
            alt="user-profile image"
            width={250}
            height={250}
          />
        </div>
        <div className="pt-10">
          <h1 className="text-center max-sm:text-xl  max-sm:text-[1.2rem]  sm:text-[2rem] xl:text-[3rem] mb-3 text-[#1371c7]  font-bold">
            {avater.login}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default RepoPage;
