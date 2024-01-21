"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import AdditionalContents from "@/Components/UiKits/Alerts/AdditionalContent";
import AlertWithDarkDismiss from "@/Components/UiKits/Alerts/DarkDismiss";
import IconInverse from "@/Components/UiKits/Alerts/IconInverse";
import LightAlert from "@/Components/UiKits/Alerts/LightAlert";
import AlertWithLightDismiss from "@/Components/UiKits/Alerts/LightDismiss";
import LightLinkColor from "@/Components/UiKits/Alerts/LightLinkColor";
import LinkColors from "@/Components/UiKits/Alerts/LinkColors";
import OutlineAlert from "@/Components/UiKits/Alerts/OutlineAlerts";
import DarkOutlineAlert from "@/Components/UiKits/Alerts/OutlineDark";
import IconsWithOutline from "@/Components/UiKits/Alerts/OutlineWithIcons";
import TextAsActions from "@/Components/UiKits/Alerts/TextAsActions";
import ThemeColorAlert from "@/Components/UiKits/Alerts/ThemeColor";
import AlertWithIcons from "@/Components/UiKits/Alerts/WithIcons";
import React from "react";
import { Container, Row } from "reactstrap";

const Alerts = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Alert" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <ThemeColorAlert />
          <LinkColors />
          <AlertWithDarkDismiss />
          <AlertWithIcons />
          <LightAlert />
          <LightLinkColor />
          <AlertWithLightDismiss />
          <OutlineAlert />
          <DarkOutlineAlert />
          <IconsWithOutline />
          <IconInverse />
          <TextAsActions />
          <AdditionalContents />
        </Row>
      </Container>
    </>
  );
};

export default Alerts;
