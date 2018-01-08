export default {
  header: 'Подзаголовки',
  headerText: 'Компонент `v-subheader` используется для разделения секций списков.',
  components: ['v-subheader'],
  examples: [{
    list: {
      header: 'Подгруппы списков',
      desc: 'Подзаголовки отлично работают со списками для описания информации которая располагается ниже.'
    },
    grid: {
      header: 'Подзаголовки Grid',
      desc: 'Подзаголовок может добавить контекст к тому, что ищет пользователь.'
    },
    menu: {
      header: 'Подзаголовки меню',
      desc: 'Использование подзаголовка может помочь разделить различные типы действий.'
    }
  }],
  props: {
    inset: 'Добавляет отступы (72px)'
  }
}
