import Hero from './hero.vue'

export default {
    title: 'Hero',
    component: { Hero },
  }
  
  const template = () => ({
    components: {
      Hero,
    },
    template: `
      <hero></hero>
    `
  });
  
  export const Default = template.bind({});