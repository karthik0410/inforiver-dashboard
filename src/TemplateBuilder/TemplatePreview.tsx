// TemplatePreview.tsx
import React, { useEffect, useRef, useState } from "react";
import useChartStore from "../store/zustand/Zustand";
import LineChart from "../chartComponents/LineChart";
import ClusterLineChart from "../chartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../chartComponents/Bar";
import AreaChart from "../chartComponents/AreaChart";
import StackedLineChart from "../chartComponents/StackedLineChart";
import WaterfallChart from "../chartComponents/WaterfallChart";
import LayoutGrid from "../components/layout/LayoutGrid";
import { useSelector } from "react-redux";
import lightTheme from "../components/Theme/lightTheme";
import darkTheme from "../components/Theme/darkTheme";
import StackedBarChart from "../chartComponents/StackedBarChart";
import ClusteredBarChart from "../chartComponents/ClusterBarChart";

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
  waterfall: WaterfallChart,
  "100stacked-column": StackedBarChart,
  "grouped-column": ClusteredBarChart,
};
const TemplatePreview = ({
  height,
  width,
  templateRef,
}: {
  height: number;
  width: number;
  templateRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  // const { height, width } = prop;

  const activeChart = useChartStore((state: any) => state.activeChart);

  const SelectedComp = componentIds[activeChart];

  const finalData =
    activeChart === "clustered-line" ||
    activeChart === "stacked-line" ||
    activeChart === "grouped-column" ||
    activeChart === "100stacked-column"
      ? dataSets
      : lineData;
  const isChartActive = activeChart !== null;

  const themeType = useSelector((state: any) => state.themeStore.themeType);

  const getTheme = (theme: any): any => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };
  const theme = getTheme(themeType);

  const {
    rows,
    columns,
    spacing,
    margin,
    strokeColor,
    stroke,
    cornerRadius,
    shadow,
    shadowColor,
    selectedShadow,
  } = useSelector((state: any) => state.toolbar);

  return (
    <div ref={templateRef} className="template-preview preview-grid">
      {isChartActive && (
        <svg
          height={templateRef?.current?.clientHeight}
          width={templateRef?.current?.clientWidth}
          style={{ backgroundColor: theme.chart.background }}
        >
          {SelectedComp && (
            <SelectedComp
              data={finalData}
              height={height}
              width={width}
              theme={theme}
            />
          )}
        </svg>
      )}
      {!isChartActive && (
        <LayoutGrid
          rows={rows}
          columns={columns}
          margin={spacing}
          containerPadding={margin}
          strokeColor={strokeColor}
          strokeWidth={stroke}
          cornerRadius={cornerRadius}
          shadow={shadow}
          shadowColor={shadowColor}
          selectedShadow={selectedShadow}
        />
      )}
    </div>
  );
};

export default TemplatePreview;
