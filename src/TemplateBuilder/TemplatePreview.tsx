
import { useSelector } from "react-redux";

import LayoutGrid from "../components/layout/layoutGrid";

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
  const { rows, columns, spacing, margin, strokeColor,stroke,cornerRadius,shadow,shadowColor ,selectedShadow} = useSelector((state: any) => state.toolbar);
  
  
  return (
    <div className="template-preview" >
    
      
      
      
      <LayoutGrid
        rows={rows}
        columns={columns}
        margin={spacing}
        containerPadding={margin}
        strokeColor={strokeColor}
        strokeWidth={stroke}
        cornerRadius={cornerRadius} shadow={shadow} shadowColor={shadowColor} selectedShadow={selectedShadow}
         height={height} width={width}/>
    </div>
  );
};

export default TemplatePreview;
