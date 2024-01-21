"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import BasicModals from "@/Components/UiKits/Modals/BasicModals";
import SizesModals from "@/Components/UiKits/Modals/Sizes";
import StaticModal from "@/Components/UiKits/Modals/StaticModal";
import VaryingContent from "@/Components/UiKits/Modals/VaryingContent";
import { ModalTitle } from "@/Constant";
import React from "react";
import { Container, Row } from "reactstrap";

const Modals = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle={ModalTitle} />
      <Container fluid>
        <Row>
          <StaticModal />
          <BasicModals />
          <VaryingContent />
          <SizesModals />
        </Row>
      </Container>
    </>
  );
};

export default Modals;
