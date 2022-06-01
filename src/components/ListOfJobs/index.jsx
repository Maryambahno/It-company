import React, { Fragment } from "react";
import Header from "./Header";
import Jobs from "./Jobs";
import Search from "./Search";
import data from "./data.json";
import { useState } from "react";

const ListOfJobs = () => {
  const [filterKeywords, setfilterKeywords] = useState([]);
  console.log(filterKeywords);
  const setSearchKeyword = (data) => {
    setfilterKeywords(data);
  };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
     {/* <Search setSearchKeyword={setSearchKeyword} />*/}

      {filterKeywords.length > 0 && (
        <Fragment>
          <Header
            keywords={filterKeywords}
            removeKeywords={deleteKeyword}
            clearAll={clearAll}
      />
      </Fragment>
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
};

export default ListOfJobs;
