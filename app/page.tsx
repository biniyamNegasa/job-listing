"use client";

import { Provider } from "react-redux";
import JobList from "./JobList/JobList";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <JobList />
    </Provider>
  );
}
