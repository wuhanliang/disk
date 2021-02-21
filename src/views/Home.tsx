 
import { getCurrentInstance } from "vue"
 

import { ChrLine } from '@/components/echarts' 
import {Row, Col} from 'ant-design-vue'


export default {
  setup() {
    
    return () => {
      return (
        <div>
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row> 
          <Row type="flex">
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
              <Col span={8}>
                  <ChrLine /> 
              </Col>
          </Row>  
        </div>
      );
    };
  },
}
