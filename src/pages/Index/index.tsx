import React from 'react';
import styles from './index.less';
import CustomHeader from "@/components/CustomHeader";
import { useModel } from 'umi';
import {Button, Input, Menu, Spin} from "antd";
import {ApiTwoTone} from "@ant-design/icons";
import proChart from "../../aseests/images/pro_chart_demo.jpg";
import Link from "antd/lib/typography/Link";
const Index: React.FC = () => {
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');
  if (loading) {
    return <div className="loading"><Spin /></div>;
  }
  return (
    <div className={styles.index}>
      <div className={styles.topPartBg}>
        <div className={styles.mask} />
        <div className={styles.topPart}>
          <CustomHeader />
          <div className={styles.generate}>
            <div>
              <h1>从链接开始</h1>
              <h2>提升品牌，挖掘新受众，Zt0.cn用最简单的方式帮您科学分析、决策和促进转化</h2>
            </div>
            <div>
              <div>
                <Input placeholder="粘贴需要缩短的网址"></Input>
                <Button type="primary">缩短</Button>
              </div>
              <h2>提示：游客身份发布的链接仅供短时间测试使用，如需稳定服务，请登录后再添加链接</h2>
            </div>
          </div>
        </div>
        <div className={styles.bodyText}>
          <h1>帮你真正了解你的客户,促进转化</h1>
          <h2>不单是工具,更多的是专业的服务,创始于2010年,99.99% SLA,稳定服务中国市场10年</h2>
        </div>
        <div className={styles.introduce}>
          <div className={styles.iconBox}>
            <ApiTwoTone style={{color: 'blue',fontSize: 54,}}/>
            <div>
              <h1>公正的第三方统计监测</h1>
              <h2>智能识别监测流量，优化广告质量，比对监控其它平台，防止作弊刷量</h2>
            </div>
          </div>
          <div className={styles.iconBox}>
            <ApiTwoTone style={{color: 'blue',fontSize: 54,}}/>
            <div>
              <h1>短信营销最佳配套方案</h1>
              <h2>使用我们的短网址用于短信营销，可以知道点击者手机号，发掘潜在客户</h2>
            </div>
          </div>
          <div className={styles.iconBox}>
            <ApiTwoTone style={{color: 'blue',fontSize: 54,}}/>
            <div>
              <h1>营销渠道分析利器/AB测试</h1>
              <h2>了解并对比所有渠道，帮助您做出正确的推广选择，优化成本及效率</h2>
            </div>
          </div>
        </div>
        <div className={styles.introduce1}>
          <img src={proChart} />
          <div>
            <h1>强劲专业的分析报表</h1>
            <h2>报表专业版可以实时显示网址点击数据，支持基于任意条件任意时间段对任意图表进行二次筛选</h2>
            <h1>高精度商业IP定位数据库</h1>
            <h2>每周更新一次的高精度商业版IP定位数据库，追踪支持全球224个国家和地区，国内精确到地级市，精度高于任何网站</h2>
            <h1>高精度设备识别追踪技术</h1>
            <h2>支持识别所有PC,移动端浏览器和APP，独有的分辨率挖掘技术，智能筛选有效流量，统计更精确</h2>
            <h1>聚合表报</h1>
            <h2>一个短网址就是一个渠道，想要聚合任意数量的渠道成一张表报统一查看？没问题，当然支持该功能</h2>
          </div>
        </div>
        <div className={styles.footer}>
          <div>
            <Menu className={styles.menu}>
              <Menu.Item>关于我们</Menu.Item>
              <Menu.Item>FAQ & SUPPORT</Menu.Item>
              <Menu.Item>举报滥用</Menu.Item>
            </Menu>
            <div className={styles.company}>
              <h3>©{new Date().getFullYear()}  柳州非零科技有限公司 运营</h3>
              <Link href="/protocol">用户协议</Link>
              <Link href="/privacy">隐私政策</Link>
              <Link href="/specification">内容管理规范</Link>
            </div>
          </div>
          <div>
            ICP：<a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">桂ICP备18003001号</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
