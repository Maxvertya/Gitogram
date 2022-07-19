import xProgress from './progress.vue'

export default {
  title: 'xProgress',
  component: { xProgress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: {
    xProgress
  },
  data () {
    return { args }
  },
  template: `
    <x-progress @onFinish="args.onFinish"></x-progress>
  `
});

export const Default = template.bind({});