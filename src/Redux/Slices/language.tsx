import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LangState {
  i18LangStatus: string;
}

const initialState: LangState = {
  i18LangStatus: "",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.i18LangStatus = action.payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
export const selectCab = (state: any) => state.language;
