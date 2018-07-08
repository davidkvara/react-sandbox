import React from "react";
import { withData } from "./dataFetcher";

const App = ({ data, loading, selected = "Georgia" }) => (
  <div className="container">
    <h2>My App is going on</h2>
    <p>some other staff</p>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <select className="people-list" defaultValue={selected}>
        {data.map(({ name }, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>
    )}
  </div>
);

export default withData(App, "https://restcountries.eu/rest/v1/all");
