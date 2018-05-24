import { counter } from "../constants";

export const increment = () => ({ type: counter.INCREMENT });
export const decrement = () => ({ type: counter.DECREMENT });
