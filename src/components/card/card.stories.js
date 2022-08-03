import Card from './card.vue'

export default {
  title: 'card',
  component: { Card },
  argTypes: {
    name: { type: 'text' },
    description: { type: 'text' },
  }
}

const template = (args) => ({
  components: {
    Card,
  },
  data () {
    return {
      args
    }
  },
  template: `
    <card :name="args.name" :description="args.description"></card>
  `
});

export const Default = template.bind({});
Default.args = {
  name: 'Default Title',
  description: 'Default descr'
}