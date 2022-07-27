import { BUY_CAKES } from "./Cake-Types";

// initializing and exporting
// action creator
export const buyCake = () => {
  return {
    type: BUY_CAKES,
  };
};
