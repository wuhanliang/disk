import {defineComponent, reactive, onMounted, Ref, ref} from 'vue'
import {Table, Popover, Button} from 'ant-design-vue'
import Disk from './Disk.module.scss'
import { FolderFilled, FileImageFilled, FolderOpenFilled, DownloadOutlined, VideoCameraOutlined } from '@ant-design/icons-vue'

const state = reactive({
	status: 1
})

const diskTable = () => {
	const columns = [
		{
			title: '文件名',
			dataIndex: 'name',
			key: 'name',
			width: '80%',
			customRender: ({text, record, index}: any) => {
				return (<div class={Disk.fileNameCol}>
					<div class={Disk.fileBox}>
						{/* <FolderFilled class={Disk.Folder}/> 
						<FileImageFilled class={Disk.Image}/>  */}
						<VideoCameraOutlined class={Disk.Video}/> 
						
						<span>{text}</span>
					</div>
					<div>
						<Button type="link"><DownloadOutlined /></Button>
					</div>
				</div>)
			}
		},
		{
			title: '大小',
			dataIndex: 'size',
			key: 'size',
			width: '10%'
		},
		{
			title: '修改日期',
			dataIndex: 'updateTime',
			key: 'updateTime',
			width: '10%'
		},
	]

	const rowSelection = reactive({
		onChange: (selectedRowKeys: any, selectedRows: any) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		onSelect: (record: any, selected: any, selectedRows: any) => {
			console.log(record, selected, selectedRows);
		},
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			console.log(selected, selectedRows, changeRows);
		}
	})

	const state = reactive({
		dataSource: [{
			name: '张老鱼',
			size: 222,
			updateTime: '2008-12-01 09:08:23',
			key: 0
		}]
	})

	for (let i = 1; i< 30; i++) {
		state.dataSource.push({
			name: '张老鱼' + i,
			size: 222 + i,
			updateTime: '2008-12-01 09:08:23',
			key: i
		})
	}

	const customRow = (record: any) => {
		const onContextmenu = (event: any) => {
			// document.oncontextmenu = () => false
		}
		return {
			// onClick: (event: any) => {},
			// onDblclick: (event: any) => {},
			onContextmenu: (event: any) => onContextmenu(event)
		}
	}

	const scroll = () => {
		const scrollHeight = document.body.scrollHeight - 300
		return {
			y: scrollHeight
		}
	}

	return <Table columns={columns}  scroll={scroll()} customRow={(record: any) => customRow(record)} dataSource={state.dataSource} row-selection={rowSelection}/>
}

export default defineComponent({
	setup () {
		return () => {
			return <div class={Disk.container}  >
				<diskTable />
			</div>
		}
	}
})