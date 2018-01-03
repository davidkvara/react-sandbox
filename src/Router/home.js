import React from "react";
import data from "./data";
import styled from "styled-components";
import "./pages.css";

const Header = styled.header`
  padding: 10px 10px 14px;
  margin-bottom: 20px;
  font-size: 24px;
  border-bottom: 2px solid #fff;
`;

const Banner = styled.div`
  width: 100%;
  padding: 80px 1.5em;
  background: ghostwhite;
  color: #454545;
`;

export const Home = () => (
  <div>
    <Header>Home Page</Header>
    <main>
      <Banner>
        <h1 style={{ marginBottom: 18, fontWeight: 400 }}>
          Welcome to this Awesome organization!
        </h1>
        <p style={{ color: "#777" }}>
          We make{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
            className="sp-un"
            title="Careful what you wish for"
          >
            this
          </a>{" "}
          and{" "}
          <span className="sp-un" title="exacly!">
            that
          </span>{" "}
          of your dreams.
        </p>
      </Banner>
    </main>
  </div>
);

export const About = () => (
  <div>
    <Header>About Page</Header>
    <main className="nice-text">
      This Page is the best in the universe and beyond. How you like my design
      skills? sharp right?! and also what you know about Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Ducimus vitae reiciendis quam quo rem
      voluptatum odit repellat dolorum laborum alias.
    </main>
  </div>
);

export const Blog = () => (
  <div>
    <Header>
      Blog Page{" "}
      <span
        className="sp-un"
        style={{ fontSize: 13, color: "indianred", letterSpacing: 0.5 }}
      >
        read only
      </span>
    </Header>
    <div className="container">
      {data.map((blog, i) => {
        return (
          <div className="box" key={i}>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
          </div>
        );
      })}
    </div>
  </div>
);
