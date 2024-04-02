import React, { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import LineChart from "../ChartComponents/LineChart";
import ClusterLineChart from "../ChartComponents/ClusttereLine";
import { dataSets, lineData } from "../components/dataSets/ChartDatas";
import BarChart from "../ChartComponents/Bar";
import AreaChart from "../ChartComponents/AreaChart";
import StackedLineChart from "../ChartComponents/StackedLineChart";
import WaterfallChart from "../ChartComponents/WaterfallChart";
import LayoutGrid from "../components/layout/layoutGrid";
import { RootState } from '../store/redux/store'; // assuming you have a RootState type defined

const componentIds: Record<string, React.FC<any>> = {
  "overlapped-column": BarChart,
  area: AreaChart,
  line: LineChart,
  "clustered-line": ClusterLineChart,
  "stacked-line": StackedLineChart,
  "waterfall": WaterfallChart
};

const TemplatePreview = () => {
  const activeChart = useSelector((state: RootState) => state.chartStore.activeChart);
  const SelectedComp = componentIds[activeChart];
  const finalData =
    activeChart === "clustered-line" || activeChart === "stacked-line"
      ? dataSets
      : lineData;
  const templateRef = useRef(null);
  const [previewHeight, setPreviewHeight] = useState();
  const [previewWidth, setPreviewWidth] = useState();
  const isChartActive = activeChart !== null;

  const rows = useSelector((state: RootState) => state.toolbar.rows);
  const columns = useSelector((state: RootState) => state.toolbar.columns);

  useEffect(() => {
    const calcHeight = (templateRef.current as any)?.clientHeight;
    const calcWidth = (templateRef.current as any)?.clientWidth;

    setPreviewHeight(calcHeight);
    setPreviewWidth(calcWidth);
  }, [activeChart]);

  return (
    <div
      ref={templateRef}
      className="template-preview"
      style={{ height: "100%", width: "100%" }}
    >
      {isChartActive && (
        <svg height={previewWidth} width={previewHeight}>
          {SelectedComp && (
            <SelectedComp
              data={finalData}
              height={previewWidth}
              width={previewHeight}
            />
          )}
        </svg>
      )}
      {!isChartActive && <LayoutGrid rows={rows} columns={columns} />}
    </div>
  );
};

export default TemplatePreview;
