import React from "react";
import { Input } from "antd";

const App = () => {
    let styles = {
        width: '40%',
        height: '40px',
        margin: '15px 150px',
        marginTop: '15px',
        borderRadius: '20px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
        // display: 'grid',
        placeItems: 'center'
    }
  return <Input placeholder="Search" style={styles}/>;
};

export default App;
