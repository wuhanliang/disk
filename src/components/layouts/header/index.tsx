import { Layout, Menu } from "ant-design-vue";
import { defineComponent, reactive } from 'vue'
import { RouterLink } from "vue-router";
import className from './index.module.scss'
 
const layoutHeader = () => {
  const state = reactive({
    selectedKeys: ['1']
  })
  return <Layout.Header class={className.header}  >
    <router-Link tag="div" class={className.logo} to={{name: 'Disk'}}>
      <img class={className.fl} src={require('@/assets/imgs/logomark.min.svg')} alt="" />
      <img src={require('@/assets/imgs/logotype.min.svg')} alt="" />
    </router-Link>
    <div>
      <Menu   mode="horizontal" defaultSelectedKeys={state.selectedKeys} class={className.menu}>
        <Menu.Item key="1" class={className.menuItem}>
          <span class="nav-text">网盘</span>
        </Menu.Item>
        {/*<Menu.Item key="2" class={className.menuItem}>*/}
        {/*  <span class="nav-text">nav 2</span>*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item key="3" class={className.menuItem}>*/}
        {/*  <span class="nav-text">nav 3</span>*/}
        {/*</Menu.Item>*/}
      </Menu>
    </div>
  </Layout.Header>;
}

export default defineComponent({
  setup() {
    return () => layoutHeader()
  }
})