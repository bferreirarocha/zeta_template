"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import BadgeExample from "@/Components/UiKits/TagAndPills/BadgeExample";
import ButtonPart from "@/Components/UiKits/TagAndPills/ButtonPart";
import ContextualPills from "@/Components/UiKits/TagAndPills/Pills/ContextualPills";
import PillWithIcon from "@/Components/UiKits/TagAndPills/Pills/PillWithIcon";
import PillWithNumber from "@/Components/UiKits/TagAndPills/Pills/PillWithNumber";
import ContextualBadge from "@/Components/UiKits/TagAndPills/Tags/ContextualBadge";
import TagWithNumber from "@/Components/UiKits/TagAndPills/Tags/TagWithNumber";
import TagWithIcon from "@/Components/UiKits/TagAndPills/Tags/TagsWithIcon";
import React from "react";
import { Container, Row } from "reactstrap";

const TagAndPills = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Tag And Pills" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <ContextualBadge />
          <ContextualPills />
          <TagWithNumber />
          <PillWithNumber />
          <TagWithIcon />
          <PillWithIcon />
          <BadgeExample />
          <ButtonPart />
        </Row>
      </Container>
    </>
  );
};

export default TagAndPills;
