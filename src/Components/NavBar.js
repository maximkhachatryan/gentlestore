import React, { useState } from 'react';
// import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
const items = [
  {
    label: 'Գլխավոր',
    to: '/'
  },
  {
    label: 'Վերնաշապիկներ',
    to: '/shirts'
  },
  {
    label: 'Շալվարներ',
    to: '/pants'
  },
  {
    label: 'Շապիկներ',
    to: '/t-shirts'
  },
  {
    label: 'Սպորտային',
    to: '/sports'
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