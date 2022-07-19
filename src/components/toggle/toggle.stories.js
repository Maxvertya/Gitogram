import { Toggle } from './toggle.vue'
import { Icon } from '@/icons'

export default {
  title: 'Toggle',
  components: {
    Toggle,
    Icon
  }
} 

const defaultView = () => {
  return {
    components: {
      Toggle,
      Icon
    },
    template: `
      <toggle>
        <icon name="up">
      </toggle>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}