import React, { useState } from 'react';
// import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    to: '/'
    // key: 'mail',
    // icon: <MailOutlined />,
  },
  {
    label: 'Catalog',
    to: '/products'
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Order Details',
  //   key: 'app',
  //   icon: <AppstoreOutlined />,
  //   // disabled: true,
  },
  {
    label: 'Contact',
    to: '/contact'
    // key: 'mail',
    // icon: <MailOutlined />,
  }
];
const App = () => {
  
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  // return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.to}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default App;