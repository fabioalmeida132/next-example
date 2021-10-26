import {Menu, MenuProps} from ".";
import linksMock from '../NavLinks/mock'
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
  title: "Menu",
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: ''
    }
  },
  argTypes: {
    children: {type: "string"},
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
