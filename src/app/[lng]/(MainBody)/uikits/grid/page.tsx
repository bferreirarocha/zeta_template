"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import GridColumnCard from "@/Components/UiKits/Grid/GridColumns";
import GridOptionsCard from "@/Components/UiKits/Grid/GridOptions";
import NestingColumnCard from "@/Components/UiKits/Grid/NestingColumn";
import OffsetCard from "@/Components/UiKits/Grid/Offsets";
import OneColumnWidthCard from "@/Components/UiKits/Grid/OneColumnWidth";
import OrderCard from "@/Components/UiKits/Grid/Order";
import VerticalAlignCard from "@/Components/UiKits/Grid/VerticalAlignment";
import React from "react";
import { Container, Row } from "reactstrap";

const page = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle="Grid" />
      <Container fluid>
        <Row>
          <GridOptionsCard />
          <GridColumnCard />
          <OneColumnWidthCard />
          <VerticalAlignCard />
          <NestingColumnCard />
          <OrderCard />
          <OffsetCard />
        </Row>
      </Container>
    </>
  );
};

export default page;
