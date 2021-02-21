
import { defineComponent, ref, reactive } from "vue"

const state = reactive({
  val: 'test demo'
})

const ipt = (props: {onInter: (val: string) => void}) => {
  // let val = reactive() 'feafeafe'
  const onInput = (val: string) => {
    state.val = val
    props.onInter(state.val)
  }
  return <div>数据双向绑定: <input value={state.val} onInput={(e: any) => onInput(e.target.value)} /> {state.val}</div>
}

const btn = (props: {onChange: () => void}) => {
  return <button class="clickme">click me</button>
}
const setup = (props: { name: string, onChange: () => void }) => {
  state.val = props.name
  return <div><ipt onInter={props.onChange} /></div>
}










export default defineComponent({
  props: {
    name: String,
    onChange: Function
  },

  setup(props: any) {
    return () => setup(props);
  },
})
