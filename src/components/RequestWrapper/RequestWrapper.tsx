import React from "react";
import Loading from "../Loading/Loading";
import FailAlert from "../FailAlert/FailAlert";
import List from "../List/List";
import { useQuery } from "urql";

/**
 * 查询 5 条 GitHub 仓库数据
 */
const QUERY = `
    query { 
        viewer { 
            repositories(first: 5){
                nodes {
                    name
                    nameWithOwner
                    description
                    url
                }
            }
        }
    }
`;

const RequestWrapper = (props: any) => {

  // result： {fetching: boolean, data: {...}, ...}
  const [result] = useQuery({
    query: QUERY
  });


  // fetching => 
  return (
    <React.Fragment>
      {result.fetching ? (
        <Loading />
      ) : result.data ? (
        <List data={result.data}/>
      ) : (
        <FailAlert />
      )}
    </React.Fragment>
  );
};

export default RequestWrapper;
