import React from "react";
import renderer from "react-test-renderer";
import Dashboard from "../components/Dashboard";

it('matches quote snapshot', () => {
  const dashboard = renderer.create(
    <Dashboard />,
  ).toJSON();
  expect(dashboard).toMatchSnapshot();
})