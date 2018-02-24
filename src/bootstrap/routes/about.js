import React from "react";
import { Grid, Col, Row } from "react-bootstrap";

export default () => (
  <div className="about-app">
    <div className="div hero-container">
      <div className="container">
        <h2>About page</h2>
      </div>
    </div>
    <Grid>
      <Row className="show-grid">
        <Col sm={8}>
          <div className="box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            necessitatibus vitae odio deleniti repudiandae rem corporis
            distinctio eaque porro numquam, animi iste alias? Architecto vero
            esse sequi sed laboriosam aspernatur.
          </div>
        </Col>
        <Col xs={6} sm={4}>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            neque vitae laboriosam inventore maiores veritatis odit in quidem.
            Tenetur, reiciendis.
          </div>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col sm={6}>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem
            officiis necessitatibus animi molestiae accusantium, illum rerum
            voluptatibus ea, accusamus dolor? Libero blanditiis animi temporibus
            debitis.
          </div>
        </Col>
        <Col sm={6}>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            incidunt, reiciendis libero excepturi fugiat sed omnis quasi, culpa
            provident quia repellendus, eum tempore hic! Similique, omnis nobis!
            Modi ipsam voluptatum quos eveniet aspernatur vero fugiat quisquam.
            Deleniti ab alias totam?
          </div>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col sm={5}>
          <div className="box">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sequi
            quaerat repellat, veritatis vitae quae laudantium in quas numquam
            exercitationem, nemo assumenda odit dolorum voluptate. Impedit,
            provident? Eum veniam sequi optio dolor non iure.
          </div>
        </Col>
        <Col sm={7}>
          <div className="box">
            Ex sequi quaerat repellat, veritatis vitae quae laudantium in quas
            numquam exercitationem, nemo assumenda odit dolorum voluptate.
            Impedit, provident? Eum veniam sequi optio dolor non iure.
          </div>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col sm={6}>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam
            veritatis, autem sapiente in odio?
          </div>
        </Col>
        <Col sm={6}>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            aliquam!
          </div>
        </Col>
      </Row>

      <div className="also_margin">
        <Row className="show-grid">
          <Col sm={8}>
            <div className="box">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              molestias aliquid voluptatibus quidem doloremque qui expedita
              beatae sint cum molestiae repudiandae similique consectetur
              laborum, accusantium, incidunt ab numquam sapiente delectus.
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">XXXXXXXXXXXXXXXXXXXXXXXXxnpm run dev</div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col sm={6}>
          <div className="box">
            asd Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magnam, velit!
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);
