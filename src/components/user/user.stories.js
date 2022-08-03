import  User  from './user.vue'

export default {
    title: 'User',
    component: { User },
    argTypes: {
      avatar: {
        control: { type: 'text' }
      },
      size: {
        options: ['big', 'middle', 'small'],
        control: { type: 'select' }
      }
    }
  }
  
  const template = (args) => ({
    components: {
      User
    },
    data () {
      return { args }
    },
    template: `
      <user :avatar="args.avatar" :size= "args.size"></user>
    `
  });
  
  export const Default = template.bind({});
  
  Default.args = {
    avatar: 'https://picsum.photos/300/300',
    size: 'small'
  }

  Default.story = {
    name: 'Виды'}