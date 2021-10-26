import {SectionBackground, SectionBackgroundProps} from ".";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at eius numquam placeat quas quia quibusdam</p>
      </div>
    ),
  },
  argTypes: {
    children: {type: ""},
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
