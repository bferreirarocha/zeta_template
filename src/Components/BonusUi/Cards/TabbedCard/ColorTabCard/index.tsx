import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColorTab, Contact, HomeText, Href, Profile } from "@/Constant";
import { TabCardData } from "@/Data/BonusUi/Cards";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const ColorTabCard = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      {TabCardData.map((item, i) => (
        <Col className="box-col-12 xl-100" lg="12" xl="6" key={i}>
          <Card>
            <CommonCardHeader heading={ColorTab} />
            <CardBody className="pt-0">
              <div className="tabbed-card">
                <Nav pills className={item.navClass}>
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                      {HomeText}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                      {Profile}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                      {Contact}
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <p className="mb-0 mt-4">{item.paragraph1}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 mt-4">{item.paragraph2}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 mt-4">{item.paragraph3}</p>
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ColorTabCard;
