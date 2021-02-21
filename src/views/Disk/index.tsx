import {Layout, Button, Breadcrumb, Input} from "ant-design-vue"
import {Header} from '@/components/layouts'
import Sider from './layout/Sider'
import DiskStyle from './css/index.module.scss'
import {reactive, ref, defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import { AppstoreOutlined, BarsOutlined, SortAscendingOutlined } from '@ant-design/icons-vue'
import DiskContent from "@/views/Disk/components/DiskContent"
const state = reactive({
	type: 1
})

const diskHeader = () => {
	return (<div class={DiskStyle.diskHeader}>
		<div>
			<div class={DiskStyle.ler}>
				<Button type="primary">上传</Button>
			</div>
			<Breadcrumb>
				<Breadcrumb.Item >
					<Button type="link" class={DiskStyle.link}>全部</Button>
				</Breadcrumb.Item>
				<Breadcrumb.Item >Home</Breadcrumb.Item>
				<Breadcrumb.Item >Home</Breadcrumb.Item>
			</Breadcrumb>
		</div>
		<div >
			<div class={DiskStyle.search}>
				<Input.Search allowClear placeholder="请输入搜索关键字"/>
				<SortAscendingOutlined class={DiskStyle.icons}/>
				<AppstoreOutlined class={DiskStyle.icons}/>
				<BarsOutlined class={DiskStyle.icons}/>
			</div>
			<div class={DiskStyle.textRight}>
				已加载20条数据
			</div>
		</div>
	</div>)
}


const Disk = {
	setup() {
		const router = useRouter()
		const changeSiderVal = (type: number) => {
			router.push({
				name: 'Disk',
				query: {
					type
				}
			})
			state.type = type
		}


		return () => {
			return (
				<Layout id="components-layout-demo-fixed-sider">
					<Header/>
					<Layout>
						<Sider onChange={changeSiderVal} type={state.type}/>
						<Layout.Content class={DiskStyle.content}>
							<div class={DiskStyle.cpatce}>
								<diskHeader />
								<DiskContent />
							</div>
						</Layout.Content>
					</Layout>
				</Layout>
			)
		}
	}
} 

export default defineComponent(Disk)