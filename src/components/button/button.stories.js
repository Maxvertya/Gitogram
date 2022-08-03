import { Button } from './'

export default {
    title: 'Button',
    component: { xButton: Button },
    argTypes: {
      hoverText: {
        control: { type: 'text' }
      },
      size: {
        options: ['size_s', 'size_m'],
        control: { type: 'select' }
      },
      theme: {
        options: ['theme_grey', 'theme_green'],
        control: { type: 'select' }
      }
    }
  }
  
  const template = (args) => ({
    components: {
      xButton: Button
    },
    data () {
      return { args }
    },
    template: `
      <x-button v-bind="args">Following</x-button>
    `
  });
  
  export const Default = template.bind({});
  
  Default.args = {
    hoverText: 'Unfollow',
    size: 'size_s',
    theme: 'theme_green'
  }

  Default.story = {
    name: 'Виды кнопок'}