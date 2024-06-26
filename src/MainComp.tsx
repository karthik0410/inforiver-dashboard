import { useState } from "react";

import SubPanel from "./components/SubPanel/SubPanel";
import PageTitle from "./components/pageTitle/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";

export enum ELayouts {
  CHART = "CHART",
  CARD = "CARD",
  TABLE = "TABLE",
  NOTES = "NOTES",
  LAYOUT = "LAYOUT"
}

const MainComp = () => {
  const [showSubPanelElements, setShowSubPanelElements] =
    useState<ELayouts | null>(null);

  const toggleToPreview = (payload: ELayouts) => {
    setShowSubPanelElements(payload);
  };
  return (
    <div className="App">
      <PageTitle />
      <div className="main-content">
        <SidePanel
          toggleToPreview={toggleToPreview}
          showSubPanelElements={showSubPanelElements}
        />

        {/* {
          isChartTab && */}

        <SubPanel
          toggleToPreview={toggleToPreview}
          showSubPanelElements={showSubPanelElements}
        />
        <TemplateWrapper />
      </div>
    </div>
  );
};

export default MainComp;
