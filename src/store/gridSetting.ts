import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GridSettings {
  rows: number;
  columns: number;
  spacing: number;
  margin: number;
  cornerRadius: number;
  stroke: number;
  shadow: boolean;
  strokeColor: string;
  shadowColor: string;
  selectedShadow: string;
  
}

const initialState: GridSettings = {
  rows: 3,
  columns: 3,
  spacing: 3,
  margin: 3,
  cornerRadius: 0,
  stroke: 1,
  shadow: false,
  strokeColor: 'black',
  shadowColor: 'black',
  selectedShadow: '',
  
};

const toolbarSlice = createSlice({
  name: "gridSetting",
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    setColumns: (state, action: PayloadAction<number>) => {
      state.columns = action.payload;
    },
    setSpacing: (state, action: PayloadAction<number>) => {
      state.spacing = action.payload;
    },
    setMargin: (state, action: PayloadAction<number>) => {
      state.margin = action.payload;
    },
    setCornerRadius: (state, action: PayloadAction<number>) => {
      state.cornerRadius = action.payload;
    },
    setStroke: (state, action: PayloadAction<number>) => {
      state.stroke = action.payload;
    },
    setShadow: (state, action: PayloadAction<boolean>) => {
      state.shadow = action.payload;
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },
    setShadowColor: (state, action: PayloadAction<string>) => {
      state.shadowColor = action.payload;
    },
    setSelectedShadow: (state, action: PayloadAction<string>) => {
      state.selectedShadow = action.payload;
    },
      },
});

export const {
  setRows,
  setColumns,
  setSpacing,
  setMargin,
  setCornerRadius,
  setStroke,
  setShadow,
  setStrokeColor,
  setShadowColor,
  setSelectedShadow,
 
} = toolbarSlice.actions;

export default toolbarSlice.reducer;
