import Navigation from './navigation.vue'
import { Icon } from '@/icons'
import  User  from '@/components/user/user.vue'

export default {
    title: 'Navigation',
    component: { Navigation },
    subcomponents: {
        Icon,
        User
      }
  }
  
  const template = () => ({
    components: {
      Navigation,
      Icon,
      User
    },
    template: `
      <navigation></navigation>
    `
  });
  
  export const Default = template.bind({});