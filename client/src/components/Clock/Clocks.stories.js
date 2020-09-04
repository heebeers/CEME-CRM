import React from "react";
import { storiesOf } from "@storybook/react";

import Clock from "../components/Clock";

storiesOf("Clock", module).add("with primary", () => (
  <Clock label="Primary Clock" />
));
