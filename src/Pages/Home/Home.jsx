import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div className="text-center">
      <h1 className="text-slate-50 text-4xl font-700 font-serif mt-3 mb-7">
        Post Card
      </h1>
      <div className="flex flex-wrap justify-between pl-5 pr-5">
        {data.map((obj) => {
          return <Card title={obj.title} body={obj.body}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
