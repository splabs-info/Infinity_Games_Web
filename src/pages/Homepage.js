import React from "react";
import {
  TitleMain,
  Partner,
  Networks,
  GrowGame,
  Milestones,
  Ecosystem,
  Signup,
} from "../components/home";
import Page from "../components/common/Page";

export default function Homepage() {

  return (
    <Page title="Home">
      <TitleMain />
      <Networks />
      <GrowGame />
      <Milestones />
      <Partner />
      <Ecosystem />
      <Signup />
    </Page>
  );
}
