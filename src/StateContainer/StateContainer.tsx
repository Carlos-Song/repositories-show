import { useState, ChangeEvent } from "react";
import { createContainer } from "unstated-next";

interface IRepositoryNode {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
}

function useCounter() {
  const [value, setValue] = useState("");
  const [data, setData] = useState<Array<IRepositoryNode>>([]);
  const [token, setToken] = useState("inputYourToken");
  const [isFeching, setIsFetching] = useState(false);
  let getFetchingState = () => isFeching;
  let stopFetching = () => setIsFetching(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const setRepositoryData = (repositories: any) => {
    setData(repositories);
  };

  const handleClick = () => {
    setToken(value);
  };
  
  return {
    data,
    value,
    token,
    setToken,
    setValue,
    isFeching,
    handleClick,
    stopFetching,
    handleChange,
    getFetchingState,
    setRepositoryData,
  };
}

export const StateCan = createContainer(useCounter);
