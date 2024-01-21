"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Animated from "@/Components/UiKits/Progress/Animated/index";
import Basic from "@/Components/UiKits/Progress/Basic";
import Custom from "@/Components/UiKits/Progress/Custom";
import Large from "@/Components/UiKits/Progress/Large";
import MultiBars from "@/Components/UiKits/Progress/MultipleBars/index";
import Small from "@/Components/UiKits/Progress/Small";
import States from "@/Components/UiKits/Progress/States";
import Striped from "@/Components/UiKits/Progress/Striped";
import { Progress } from "@/Constant";
import React from "react";
import { Container, Row } from "reactstrap";

const ProgressBar = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle={Progress} parent="Ui Kits" />
      <Container fluid>
        <Row>
          <Basic />
          <Small />
          <Large />
          <Custom />
          <States />
          <MultiBars />
          <Striped />
          <Animated />
        </Row>
      </Container>
    </>
  );
};

export default ProgressBar;
