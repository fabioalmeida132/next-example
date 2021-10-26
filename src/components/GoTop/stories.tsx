import {GoTop} from ".";
import {Meta,Story} from "@storybook/react/types-6-0";

export default {
  title: "GoTop",
  component: GoTop,
} as Meta;

export const Template: Story = () => {
  return (
    <div style={{height: '400vh'}}>
      <GoTop  />
    </div>
  );
};
