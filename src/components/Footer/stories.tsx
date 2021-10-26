import {Meta, Story} from '@storybook/react/types-6-0'
import {Footer, FooterProps} from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://www.google.com">Feito por Fábio Almeida</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
