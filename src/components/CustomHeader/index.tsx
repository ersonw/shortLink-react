import React from 'react';
import styles from './index.less';
import { useModel } from 'umi';
import logo from '../../aseests/images/logo-2.png'
import {Button, Menu} from 'antd';
const CustomHeader: React.FC = () => {
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const { router } = initialState;
  return (
    <div className={styles.header}>
      <div>
        <img
          src={logo}
          onClick={()=>{
            router("/");
          }}
        /></div>
      <Menu className={styles.menu}>
        <Menu.Item
          onClick={()=>{
            router("/demo");
          }}
          key="demo"
        >DEMO演示</Menu.Item>
        <Menu.Item
          onClick={()=>{
            router("/price");
          }}
          key="price"
        >价格</Menu.Item>
        <Menu.Item
          onClick={()=>{
            router("/bulletin");
          }}
          key="bulletin"
        >公告</Menu.Item>
        <Menu.SubMenu title="联系我们" key="subs">
          <Menu.Item
            onClick={()=>{
              router("/preSales");
            }}
            key="preSales"
          >售前咨询</Menu.Item>
          <Menu.Item
            onClick={()=>{
              router("/afterSales");
            }}
            key="afterSales"
          >售后咨询</Menu.Item>
          <Menu.Item
            onClick={()=>{
              router("/support");
            }}
            key="support"
          >技术支持</Menu.Item>
          <Menu.Item
            onClick={()=>{
              router("/business");
            }}
            key="business"
          >商务合作</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Button
        type="primary" className={styles.button}
        onClick={()=>{
          router("/welcome");
        }}
      >控制台</Button>
    </div>
  );
};

export default CustomHeader;
