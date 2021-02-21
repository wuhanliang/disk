
import { defineComponent, reactive } from "vue"
import style from './login.module.scss'
import { Form, Input, Button, Row, Col } from 'ant-design-vue'
import {
  AndroidOutlined,
  AppleOutlined,
  TwitterOutlined,
  WechatOutlined,
  DropboxOutlined,
  GooglePlusOutlined,
  SketchOutlined,
  AliwangwangOutlined,
  Html5Outlined,
  SkypeOutlined,
  ZhihuOutlined,
  IeOutlined,
  DingdingOutlined,
  QqOutlined,
  AlipayCircleOutlined,
  GithubOutlined
} from '@ant-design/icons-vue'


const videoBg = () => {
  const style = {
    height: '100vh',
    backgroundColor: '#fff',

  }
  return <video style={style} muted playsinline autoplay loop src={require('@/assets/imgs/blocks_4.mp4')} />
}

const formData = () => {
  const formState = reactive({
    userName: '',
    password: ''
  })

 
  const labelCol = { span: 4 }
  const wrapperCol = { span: 19 }

  const logomark = require('@/assets/imgs/logomark.min.svg')
  const logotype = require('@/assets/imgs/logotype.min.svg')

  return (<div class={style.formData}>
    <div class={style.logo}>
      <span><img src={logomark} alt=""/></span><span><img src={logotype} alt=""/></span>
    </div>
    <Form layout="horizontal" labelCol={labelCol} wrapperCol={wrapperCol}  model={formState}>
      <Form.Item label="用户名">
        <Input  size="large" placeholder="请输入用户名" value={formState.userName} onChange={(e: any) => {formState.userName = e.target.value}}/>
      </Form.Item>
      <Form.Item label="密码">
        <Input  size="large" placeholder="请输入密码" type="password" value={formState.password} onChange={(e: any) => {formState.password = e.target.value}}/>
      </Form.Item>
    </Form>
    <div class={style.formBottom}>
      <Row>
        <Col span={19} offset={4}>
          <Button block size="large"  type="danger" >
              登录
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={19} offset={4}>
          <div class={style.other}>
            <WechatOutlined color="red"/>
            <QqOutlined />
            <AlipayCircleOutlined />
            <GithubOutlined />
          </div>
        </Col>
      </Row>
    </div>
  </div>)
}

const content = () => {
  return (<div class={style.content}>
    <div class={style.description}>
      <h2 class={style.title}>欢迎登录！</h2>
      <h1>为像你这样的人建立的社区</h1>
      <h2>提炼自企业级中后台产品的交互语言和视觉风格。</h2>
      <ul class={style.itemList}>
        <li>
          <AndroidOutlined /> Flutter
        </li>
        <li>
          <AppleOutlined /> AppleOutlined
        </li>
        <li>
          <TwitterOutlined /> TwitterOutlined
        </li>
        <li>
          <WechatOutlined /> WechatOutlined
        </li>
        <li>
          <DropboxOutlined /> DropboxOutlined
          </li>
        <li>
          <GooglePlusOutlined /> GooglePlusOutlined
          </li>
        <li>
          <SketchOutlined /> SketchOutlined
          </li>
        <li>
          <AliwangwangOutlined /> AliwangwangOutlined
          </li>
        <li>
          <Html5Outlined /> Html5Outlined
          </li>
        <li>
          <SkypeOutlined /> SkypeOutlined
          </li>
        <li>
          <ZhihuOutlined /> ZhihuOutlined
          </li>
        <li>
          <IeOutlined /> IeOutlined
          </li>
        <li>
          <DingdingOutlined /> DingdingOutlined
          </li>
      </ul>
    </div>
    <formData></formData>
  </div>)
}



const Login = defineComponent({
  setup() {
    return () => {
      return (
        <div class={style.authLogin}>
          <videoBg />
          <content />
        </div>
      )
    }
  },
})

export default Login