import { Button } from './'

export default {
  title: 'Кнопка',
  components: {
    Button
  }
} 

const greenView = () => {
  return {
    components: {
        xButton: Button
      },
    template: `
      <x-button theme="green">Follow</x-button>
      `
  }
}

const greyView = () => {
  return {
    components: {
      xButton: Button
    },
    template: `
    <x-button theme="grey">Follow</-button>
      `
  }
}

const smallView = () => {
  return {
    components: {
        xButton: Button
      },
    template: `
      <x-button theme="green" size="small">Follow</x-button>
      `
  }
}

export { greenView }
export { greyView }
export { smallView }

greenView.story = {
  name: 'Зеленая кнопка'
}

greyView.story = {
  name: 'Серая кнопка'
}

smallView.story = {
  name: 'Маленькая кнопка'
}