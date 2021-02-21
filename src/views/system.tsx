import { Layout, Menu } from "ant-design-vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons-vue'

import { reactive } from 'vue'

const layoutSider = () => {
  const style = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
  }
  const state = reactive({
    selectedKeys: ['1']
  })

  return (
    <Layout.Sider style={style}>
       
      <Menu theme="dark" mode="inline" defaultSelectedKeys={state.selectedKeys}>
        <Menu.Item key="1"> 
          <UserOutlined />
          <span class="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span class="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span class="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span class="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <CloudOutlined />
          <span class="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <AppstoreOutlined />
          <span class="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <TeamOutlined />
          <span class="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <ShopOutlined />
          <span class="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

const layoutHeader = () => {
  const style = {
    background: "#fff",
    padding: 0,
    // height: '80px',
    width: '100%'
  }
  return <Layout.Header style={style} />;
}

const layoutContent = () => {
  const style={ margin: '16px', overflow: 'initial', background: '#fff', padding: '16px', borderRadius: '2px'}
  
  const list: any = []


  for(let i = 0; i< 1000; i++) {
    list.push(i)
  }



  return (<Layout.Content style={style}>
       {
         list.map((i: number) => {
           return (<div>{i}</div>)
         })
       }
       {
         list.map((i: number) => {
           return (<div>{i}</div>)
         })
       }
  </Layout.Content>)
}


 

const Home = {
  setup() {
    return () => {
      return (
        <Layout id="components-layout-demo-fixed-sider">
          <layoutHeader />

          <Layout style={{ marginLeft: '200px' }}>
          <layoutSider />

            <layoutContent/>
          </Layout>
        </Layout>
      );
    };
  },
};

export default Home
