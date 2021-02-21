 
import { defineComponent, ref, reactive} from "vue"
import Test from './test' 

 
const state = reactive({
	status: '666666'
})

const setBaiduMap = () => {
	return (<Test name={state.status} onChange={(val: string) => {
		state.status = val
	}} />)
}

const setup = () => {
	return <div>{setBaiduMap()}父组件：{state.status}</div>
}


export default defineComponent({
  
	setup() {
		return () => setup()
	},
})




