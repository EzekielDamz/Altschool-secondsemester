import { createContext, useState, useContext } from "react";

export const GitsContext = createContext();

export const useRepoContext = () => {
  return useContext(GitsContext);
};

export const RepoContextProvider = ({ children }) => {
  const [repoData, setRepoData] = useState([]);
  const [avater, setAvater] = useState([]);
  const [Loading, setLoading] = useState(true);
    const [RepoByName, setRepoByName] = useState([]);
  return (
    <GitsContext.Provider
      value={{
        repoData,
        setRepoData,
        avater,
        setAvater,
        Loading,
        setLoading,
        RepoByName,
        setRepoByName,
      }}
    >
      {children}
    </GitsContext.Provider>
  );
};
