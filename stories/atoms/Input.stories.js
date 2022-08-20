import {Input} from "../../atomic/atoms/Input";

export default {
    title: 'Atoms/Input',
    component: Input,
  };

const Template = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
  // primary: true,
  // type: 'text',
  name: 'fname',
  // id: 'fname',
  // placeholder: 'Names',
};


export const email = Template.bind({});
email.args = {
  primary: true,
  type: 'email',
  name: 'email',
  id: 'email',
  placeholder: 'Email',
};

export const phone = Template.bind({});
phone.args = {
  primary: true,
  type: 'tel',
  name: 'phone',
  id: 'phone',
  placeholder: 'Phone',
};

export const password = Template.bind({});
password.args = {
  primary: true,
  type: 'password',
  placeholder: 'Password',
};