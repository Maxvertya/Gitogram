import Comments from './comments.vue'

export default {
    title: 'Comments',
    component: { Comments },
    argTypes: {
      username: { type: 'text' },
      text: { type: 'text' },
    }
  }
  
  const template = (args) => ({
    components: {
      Comments,
    },
    data () {
      return {
        args
      }
    },
    template: `
      <comments :username="args.username" :text="args.text"></comments>
    `
  });
  
  export const Default = template.bind({});
  Default.args = {
    username: 'Default Title',
    text: 'Default descr'
  }