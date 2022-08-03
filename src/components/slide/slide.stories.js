import Slide from './slide.vue'
import { xProgress } from '@/components/progress'
import { User } from '@/components/user'
import { xButton } from '@/components/button'

export default {
  title: 'slide',
  component: { Slide },
  subcomponents: {
    xProgress,
    User,
    xButton
  }
}

const template = () => ({
  components: {
    Slide,
    xProgress,
    User,
    xButton
  },
  template: `
    <slide></slide>
  `
});

export const Default = template.bind({});