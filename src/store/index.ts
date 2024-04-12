import { configureStore, combineReducers } from "@reduxjs/toolkit";
import GridSetting from "./gridSetting";
import titleSlice from "./titleSlice";
import themeStore from "./ThemeIndicator";
import selectedGrid from "./selectedGrid";
import undoRedo from "./undoRedoObject"

const rootReducer = combineReducers({
  themeStore: themeStore,
  gridSetting: GridSetting,
  title: titleSlice,
  undoRedo: undoRedo,
  selectedGrid: selectedGrid,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
