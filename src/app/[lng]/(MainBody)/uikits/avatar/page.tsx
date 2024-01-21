'use client'
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import GroupCard from "@/Components/UiKits/Avatars/GroupCard";
import RatioCard from "@/Components/UiKits/Avatars/RatioCard";
import SizingCard from "@/Components/UiKits/Avatars/SizingCard";
import StatusIndicatorCard from "@/Components/UiKits/Avatars/StatusIndicatorCard";
import React from "react";
import { Container, Row } from "reactstrap";

const page = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits " pageTitle="Avatars" />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <SizingCard />
            <StatusIndicatorCard />
            <RatioCard />
            <GroupCard />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default page;
