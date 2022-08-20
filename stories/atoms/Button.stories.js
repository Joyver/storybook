import {Button} from "../../atomic/atoms/Button";

export default {
    title: 'Atoms/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Boton principal',
  onClick: () => console.log('Hola'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Boton secundario',
};

export const Whitebuttons = Template.bind({});
Whitebuttons.args = {
  buttonType: 'white',
  label: 'White buttons',
};

export const Buttonswithicon = Template.bind({});
Buttonswithicon.args = {
  buttonType: 'leftIcon',
  label: 'Buttons with icon',
};

export const Buttonwithtrailingicons = Template.bind({});
Buttonwithtrailingicons.args = {
  buttonType: 'rightIcon',
  label: 'Buttons with trailing icon',
};

export const Roundbuttons = Template.bind({});
Roundbuttons.args = {
  buttonType: 'round',
  label: 'Round buttons',
};

export const Circularbuttons = Template.bind({});
Circularbuttons.args = {
  buttonType: 'circular',
  label: '+',
};
