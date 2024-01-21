"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import BlockQuote from "@/Components/UiKits/Typography/BlockQuote";
import DisplayHeadings from "@/Components/UiKits/Typography/DisplayHeadings";
import BoldFont from "@/Components/UiKits/Typography/FontWeight/BoldFont";
import ExtraBoldFont from "@/Components/UiKits/Typography/FontWeight/ExtraBoldFont";
import LightNormalFont from "@/Components/UiKits/Typography/FontWeight/LightNormalFont";
import NormalFont from "@/Components/UiKits/Typography/FontWeight/NormalFont";
import ThinFont from "@/Components/UiKits/Typography/FontWeight/ThinFont";
import VeryThinFont from "@/Components/UiKits/Typography/FontWeight/VeryThinFont";
import HeadingCard from "@/Components/UiKits/Typography/HeadingCard";
import { Headings } from "@/Components/UiKits/Typography/Headings";
import InlineText from "@/Components/UiKits/Typography/InlineText";
import Lead from "@/Components/UiKits/Typography/Lead";
import ListingTypography from "@/Components/UiKits/Typography/Listing";
import OrderListBold from "@/Components/UiKits/Typography/Listing/BoldOrderedList";
import FontAwesomeList from "@/Components/UiKits/Typography/Listing/FontAwesome";
import IcoIconList from "@/Components/UiKits/Typography/Listing/IcoIconLIst";
import OrderList from "@/Components/UiKits/Typography/Listing/OrderedList";
import ThemifyList from "@/Components/UiKits/Typography/Listing/ThemifyList";
import UnOrderList from "@/Components/UiKits/Typography/Listing/UnOrderedList";
import TextColor from "@/Components/UiKits/Typography/TextColor";
import React from "react";
import { Container, Row } from "reactstrap";

const page = () => (
  <>
    <CommonBreadcrumb pageTitle="Typography" parent="Ui Kits" />
    <Container fluid>
      <Row>
        <HeadingCard />
        <VeryThinFont />
        <ThinFont />
        <NormalFont />
        <LightNormalFont />
        <BoldFont />
        <ExtraBoldFont />
        <Headings />
        <DisplayHeadings />
        <Lead />
        <InlineText />
        <TextColor />
        <ListingTypography />
        <BlockQuote />
      </Row>
    </Container>
  </>
);

export default page;
