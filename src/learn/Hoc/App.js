import React from "react";
import { withData } from "./dataFetcher";

const App = ({ data, loading }) => (
  <div className="container">
    <h2>Hello, Hello</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis,
      similique eveniet impedit quo deleniti quis! Incidunt repellat veniam
      perspiciatis?
    </p>
    <em>Excepturi voluptatem reprehenderit nostrum officia numquam</em>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <ul>{data.map((item, i) => <li key={item.id}>{item.title}</li>)}</ul>
    )}
  </div>
);

export default withData(App, "https://ghibliapi.herokuapp.com/films/");
