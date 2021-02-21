import { defineComponent, reactive } from 'vue'

const state = reactive({
  dataSource: [
    {
      name: '刘翔',
      age: 32
    },
    {
      name: '姚明',
      age: 40
    },
    {
      name: '刘强东',
      age: 65
    },
  ]
})


const list = () => {
  return <ul>
    {
      state.dataSource.map((item: any, key) => {
        return <li key={key}>{item.name}, {item.age}</li>
      })
    }
  </ul>
}

export default defineComponent({
  setup() {
    return () => {
      return <div><list /></div>
    }
  }
})

