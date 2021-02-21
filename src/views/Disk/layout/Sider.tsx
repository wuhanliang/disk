import { Layout, Menu } from "ant-design-vue"
import SiderStyle from './Sider.module.scss'
import {
  DeleteOutlined,
  BookOutlined,
	FileImageOutlined,
	VideoCameraOutlined,
	RobotOutlined
} from '@ant-design/icons-vue'

import { reactive, defineComponent } from 'vue'



export default defineComponent({
	setup(props: any, { emit,  attrs}: any) {

		const state = reactive({
			selectedKeys: [attrs.type]
		})

		return () => (
			<Layout.Sider class={SiderStyle.sider}>
				<Menu onClick={({key}) => emit('change', key)} class={SiderStyle.menu}  mode="inline" defaultSelectedKeys={state.selectedKeys}>
					<Menu.Item key={1} class={SiderStyle.menuItem}>
						<BookOutlined />
						<span class="nav-text">全部文件</span>
					</Menu.Item>
					<Menu.Item key={2} class={SiderStyle.menuItem}>
						<FileImageOutlined />
						<span>图片</span>
					</Menu.Item>
					<Menu.Item key={3} class={SiderStyle.menuItem}>
						<VideoCameraOutlined />
						<span>视频</span>
					</Menu.Item>
					<Menu.Item key={4} class={SiderStyle.menuItem}>
						<RobotOutlined />
						<span>其他</span>
					</Menu.Item>
					<Menu.Item key={5} class={SiderStyle.menuItem}>
						<DeleteOutlined />
						<span class="nav-text">回收站</span>
					</Menu.Item>
				</Menu>
			</Layout.Sider>
		)
	}
})