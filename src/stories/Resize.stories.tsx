import type { ComponentMeta } from "@storybook/react";
import type { ComponentStory } from "@storybook/react";
import { Box } from "./box";
import type { Options } from "../types";

export default {
  title: "Resizing Examples",
  component: Box,
} as ComponentMeta<typeof Box>;

const dimensionArgs = {
  minHeight: 300,
  minWidth: 300,
  maxHeight: 900,
  maxWidth: 900,
};

const EastDirectionResizeTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="east" {...args} />;
export const EastDirectionResize = EastDirectionResizeTemplate.bind({});
EastDirectionResize.args = {
  ...dimensionArgs,
};

const WestDirectionResizeTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="west" {...args} />;
export const WestDirectionResize = WestDirectionResizeTemplate.bind({});
WestDirectionResize.args = {
  ...dimensionArgs,
};

const SouthDirectionResizeTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="south" {...args} />;
export const SouthDirectionResize = SouthDirectionResizeTemplate.bind({});
SouthDirectionResize.args = {
  ...dimensionArgs,
};

const NorthDirectionResizeTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="north" {...args} />;
export const NorthDirectionResize = NorthDirectionResizeTemplate.bind({});
NorthDirectionResize.args = {
  ...dimensionArgs,
};

const SouthEastDirectionResizeTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="south-east" {...args} />;
export const SouthEastDirectionResize = SouthEastDirectionResizeTemplate.bind(
  {}
);
SouthEastDirectionResize.args = {
  ...dimensionArgs,
};

const SouthEastDirectionResizeWithResetTemplate: ComponentStory<typeof Box> = (
  args: Partial<Options>
) => <Box direction="south-east" {...args} />;
export const SouthEastDirectionResizeWithReset =
  SouthEastDirectionResizeWithResetTemplate.bind({});
SouthEastDirectionResizeWithReset.args = {
  initialHeight: 500,
  initialWidth: 500,
  ...dimensionArgs,
};
