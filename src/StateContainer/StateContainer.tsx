import { useState } from "react";
import { createContainer } from "unstated-next";
import { OAuthLink } from '../utils/authToken';

interface IRepositoryNode {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
}

function useCounter() {
  // const [value, setValue] = useState("");
  const [data, setData] = useState<Array<IRepositoryNode>>([]);
  const [token, setToken] = useState("");
  const [ authCode, setAuthCode ] = useState("");
  const [isFeching, setIsFetching] = useState(false);
  let getFetchingState = () => isFeching;
  let stopFetching = () => setIsFetching(false);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const setRepositoryData = (repositories: any) => {
    setData(repositories);
  };

  

  const handleClick = () => {
    window.location.href = OAuthLink;
  };


  return {
    data,
    // value,
    token,
    setToken,
    authCode,
    // setValue,
    isFeching,
    handleClick,
    setAuthCode,
    stopFetching,
    // handleChange,
    getFetchingState,
    setRepositoryData,
  };
}

export const StateCan = createContainer(useCounter);
