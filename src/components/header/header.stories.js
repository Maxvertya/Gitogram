import headerSection from './header.vue'

export default {
    title: 'Header',
    component: { headerSection },
  }
  
  const template = () => ({
    components: {
      headerSection,
    },
    template: `
      <header-section></header-section>
    `
  });
  
  export const Default = template.bind({});