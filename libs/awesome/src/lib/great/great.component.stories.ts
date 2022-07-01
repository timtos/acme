import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GreatComponent } from './great.component';

export default {
  title: 'GreatComponent',
  component: GreatComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<GreatComponent>;

const Template: Story<GreatComponent> = (args: GreatComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    message:  null,
}