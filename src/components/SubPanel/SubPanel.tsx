import { ELayouts } from "../../MainComp";
import ChartBoxHolder from "./ChartBoxHolder";

const columnChartIcons = [
  {
    className: "light-overlapped-column",
    // onclick : () =>{

    // }
    id: "overlapped-column",
  },
  {
    className: "light-100marimekko",
    id: "100marimekko",
  },
  {
    className: "light-marimekko",
    id: "marimekko",
  },
  {
    className: "light-stacked-column",
    id: "stacked-column",
  },
  {
    className: "light-100stacked-column",
    id: "100stacked-column",
  },
  {
    className: "light-grouped-column",
    id: "grouped-column",
  },

  {
    className: "light-stacked-marimekko",
    id: "stacked-marimekko",
  },
  {
    className: "light-100stacked-marimekko",
    id: "100stacked-marimekko",
  },
  {
    className: "light-integrated-variance-column",
    id: "integrated-variance-column",
  },
];

const waterfallChartIcons = [
  { className: "light-waterfall", id: "waterfall" },
  { className: "light-stacked-waterfall", id: "stacked-waterfal" },
  { className: "light-paired-waterfall", id: "paired-waterfall" },
  { className: "light-breakdown-waterfall", id: "breakdown-waterfall" },
  { className: "light-column-waterfall", id: "column-waterfall" },
  {
    className: "light-Integrated-variance-waterfall",
    id: "integrated-variance-waterfall",
  },
];

const bulletChartIcons = [
  { className: "light-conditional-column", id: "conditional-column" },
  { className: "light-comparative-bullet", id: "comparative-bullet" },
  { className: "light-ibcs-bullet", id: "ibcs-bullet" },
  { className: "light-qualitative-bullet", id: "qualitative-bullet" },
  { className: "light-dumbbell-plot", id: "dumbbell-plot" },
  { className: "light-dot-plot", id: "dot-plot" },
  { className: "light-range-plot", id: "range-plot" },
  { className: "light-arrow-plot", id: "arrow-plot" },
];
const specialChartIcons = [
  {
    className: "light-lollipop",
    id: "lollipop",
  },
  {
    className: "light-executive-funnel",
    id: "executive-funnel",
  },
  {
    className: "light-box-plot",
    id: "box-plot",
  },
  {
    className: "light-radar",
    id: "radar",
  },
  {
    className: "light-treemap",
    id: "treemap",
  },
  {
    className: "light-pie",
    id: "pie",
  },
  {
    className: "light-donut",
    id: "donut",
  },
  {
    className: "light-semi-circle-pie",
    id: "semi-circle-pie",
  },
  {
    className: "light-arc-donut",
    id: "arc-donut",
  },
  {
    className: "light-variable-pie",
    id: "variable-pie",
  },
  {
    className: "light-sunburst",
    id: "light-sunburst",
  },
];
const areaChartIcons = [
  { className: "light-area", id: "area" },
  { className: "light-stacked-area", id: "stacked-area" },
  { className: "light-clustered-area", id: "clustered-area" },
  { className: "light-baseline-area", id: "baseline-area" },
  { className: "light-integrated-area", id: "integrated-area" },
];

const lineChartIcons = [
  { className: "light-line", id: "line" },
  { className: "light-stacked-line", id: "stacked-line" },
  { className: "light-clustered-line", id: "clustered-line" },
  { className: "light-slopegraph", id: "slopegraph" },
  { className: "light-baseline", id: "baseline" },
  { className: "light-variance-line", id: "variance-area" },
];
const comboChartIcons = [
  { className: "light-column-line", id: "column-line" },
  { className: "light-column-area", id: "column-area" },
  { className: "light-column-column", id: "column-column" },
  { className: "light-stacked-column-line", id: "stacked-column-line" },
  {
    className: "light-stacked-column-area",
    id: "stacked-column-area",
  },
];

const SubPanel = ({
  showSubPanelElements,
}: {
  showSubPanelElements: ELayouts;
}) => {
  if (showSubPanelElements !== ELayouts.CHART) return null;

  return (
    <div className="sub-panel">
      {showSubPanelElements === "CHART" && (
        <>
          <p className="charts-text-title">Chart</p>
          <div className="search-input">
            <i className="template-builder light-search"></i>
            <input
              type="text"
              // id="search-chart"
              placeholder="Search.."
              className="search-box"
            />
          </div>
          <p className="chart-type-text">Comparision / Composition</p>

          <ChartBoxHolder
            title="Column"
            chartIcons={columnChartIcons}
            logo="chart light-overlapped-column"
          />
          <ChartBoxHolder
            title="Waterfall"
            chartIcons={waterfallChartIcons}
            logo="chart light-waterfall"
          />
          <ChartBoxHolder
            title="Special"
            chartIcons={specialChartIcons}
            logo="chart light-lollipop"
          />
          <ChartBoxHolder
            title="Bullet"
            chartIcons={bulletChartIcons}
            logo="chart light-qualitative-bullet"
          />

          <p className="charts-text-title">Sparkline</p>
          <ChartBoxHolder
            title="Area"
            chartIcons={areaChartIcons}
            logo="chart light-area"
          />
          <ChartBoxHolder
            title="Line"
            chartIcons={lineChartIcons}
            logo="chart light-line"
          />
          <ChartBoxHolder
            title="Combo"
            chartIcons={comboChartIcons}
            logo="chart light-spline-column-area"
          />
        </>
      )}
             ./

    </div>
  );
};

export default SubPanel;
