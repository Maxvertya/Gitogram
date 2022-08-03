import Info from './info.vue'

export default {
  title: 'Info',
  component: { Info }
}

const template = (args) => ({
  components: {
    Info
  },
  data () {
    return {
      args
    }
  },
  template: `
    <info :stars="args.stars" :forks="args.forks"></info>
  `
});

export const Default = template.bind({});
Default.args = {
  stars: 16,
  forks: 10
}