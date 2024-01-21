"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import AllBorersColorCard from "@/Components/UiKits/HelperClasses/AllBorderCards/AllBordersCard";
import BorderRadiusCard from "@/Components/UiKits/HelperClasses/AllBorderCards/BorderRadiusCard";
import BorderWidthCard from "@/Components/UiKits/HelperClasses/AllBorderCards/BorderWidthCard";
import ButtonColorCard from "@/Components/UiKits/HelperClasses/AllButtonCards/ButtonColorCard";
import ButtonOutlineCard from "@/Components/UiKits/HelperClasses/AllButtonCards/ButtonOutlineCard";
import FontSizeCard from "@/Components/UiKits/HelperClasses/AllFontCards/FontSizeCard";
import FontStyleCard from "@/Components/UiKits/HelperClasses/AllFontCards/FontStyleCard";
import FontWeightCard from "@/Components/UiKits/HelperClasses/AllFontCards/FontWeightCard";
import TextColorCard from "@/Components/UiKits/HelperClasses/AllFontCards/TextColorCard";
import MarginBottomCard from "@/Components/UiKits/HelperClasses/AllMarginCards/MarginBottomCard";
import MarginCard from "@/Components/UiKits/HelperClasses/AllMarginCards/MarginCard";
import MarginLeftCard from "@/Components/UiKits/HelperClasses/AllMarginCards/MarginLeftCard";
import MarginRightCard from "@/Components/UiKits/HelperClasses/AllMarginCards/MarginRightCard";
import MarginTopCard from "@/Components/UiKits/HelperClasses/AllMarginCards/MarginTopCard";
import PaddingBottomCard from "@/Components/UiKits/HelperClasses/AllPaddingCards/PaddingBottomCard";
import PaddingCard from "@/Components/UiKits/HelperClasses/AllPaddingCards/PaddingCard";
import PaddingLeftCard from "@/Components/UiKits/HelperClasses/AllPaddingCards/PaddingLeftCard";
import PaddingRightCard from "@/Components/UiKits/HelperClasses/AllPaddingCards/PaddingRightCard";
import PaddingTopCard from "@/Components/UiKits/HelperClasses/AllPaddingCards/PaddingTopCard";
import BackgroundColorCard from "@/Components/UiKits/HelperClasses/BackgroundColorCard";
import BadgeColorCard from "@/Components/UiKits/HelperClasses/BadgeColorCard";
import ImageSizeCard from "@/Components/UiKits/HelperClasses/ImagesSizeCard";
import OverflowCard from "@/Components/UiKits/HelperClasses/OverflowCard";
import PositionCard from "@/Components/UiKits/HelperClasses/PositionCard";
import VerticalAlignCard from "@/Components/UiKits/HelperClasses/VerticalAlignCard";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const page = () => (
  <>
    <CommonBreadcrumb parent="Ui Kits" pageTitle="Helper Classes" />
    <Container fluid>
      <Row>
        <PaddingCard />
        <MarginCard />
        <PaddingLeftCard />
        <PaddingRightCard />
        <PaddingTopCard />
        <PaddingBottomCard />
        <MarginLeftCard />
        <MarginRightCard />
        <MarginTopCard />
        <MarginBottomCard />
        <VerticalAlignCard />
        <ImageSizeCard />
        <TextColorCard />
        <BadgeColorCard />
        <BackgroundColorCard />
        <ButtonColorCard />
        <Col xl="6">
          <BorderRadiusCard />
          <FontWeightCard />
          <FontStyleCard />
          <OverflowCard />
        </Col>
        <FontSizeCard />
        <AllBorersColorCard />
        <Col xl="6">
          <BorderWidthCard />
          <PositionCard />
          <ButtonOutlineCard />
        </Col>
      </Row>
    </Container>
  </>
);

export default page;
