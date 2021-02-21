import { ConfigProvider, BackTop } from "ant-design-vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { defineComponent } from "vue"



export default defineComponent({
  setup() {
    return () => {
      return (
        <ConfigProvider locale={zhCN}>
          <router-view />
        </ConfigProvider>
      );
    };
  },
})
