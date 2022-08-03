import Info from './info.vue'
import { Icon } from '@/icons'

export default {
  title: 'Info',
  component: { Info },
  subcomponents: {
    Icon
  }
}

const template = (args) => ({
  components: {
    Info,
    Icon
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