import { Card } from 'antd';
import './Profile.css';
import { Image } from 'antd';
import { useState } from 'react';

import { Button, Form, Input, Space, Tooltip, Typography } from 'antd';

import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

const Profile = () => {

    const [username, setUsername] = useState('');
    const [imgUrl, setImgUrl] = useState('https://wallpaperaccess.com/full/275808.jpg');
    const [displayText, setDisplayText] = useState('');
    const [hyperlink, setHyperlink] = useState('');

    const [usernameInput, setUsernameInput] = useState('');
    const [imgUrlInput, setImgUrlInput] = useState('https://wallpaperaccess.com/full/275808.jpg');
    const [displayTextInput, setDisplayTextInput] = useState('');
    const [hyperlinkInput, setHyperlinkInput] = useState('');

    const handleUsernameInputChange = (e) => {
        setUsernameInput(e.target.value);
    };
    const handleImgUrlInputChange = (e) => {
        setImgUrlInput(e.target.value);
    };
    const handleDisplayTextInputChange = (e) => {
        setDisplayTextInput(e.target.value);
    };
    const handleHyperlinkInputChange = (e) => {
        setHyperlinkInput(e.target.value);
    }; 

    const handleUsernameClick = (e) => {
        setUsername(usernameInput);
        setUsernameInput('');
    }
    const handleImgUrlClick = (e) => {
        setImgUrl(imgUrlInput);
        setImgUrlInput('');
    }
    const handleWebsiteClick = (e) => {
        setDisplayText(displayTextInput);
        setDisplayTextInput('');
        setHyperlink(hyperlinkInput);
        setHyperlinkInput('');
    }

    return (
        <Card title='Profile' style={{ height: '80vh'}}>
            <div
                style={{
                    display: 'box'
                }}
                dangerouslySetInnerHTML={{
                    __html: `<img style="height: 200px;" src="${imgUrl}">`
                }}
            />
            <div>
                <ul>
                    <li>
                        @{username}
                    </li>
                    <li>
                        <a href={hyperlink}>{displayText}</a>
                    </li>
                </ul>
            </div>
            <Space direction="vertical" size="middle">
                <Space.Compact style={{ width: '100%' }}>
                    <Input defaultValue={usernameInput} placeholder="使用者名稱" onChange={handleUsernameInputChange} />
                    <Button type='primary' onClick={handleUsernameClick}>修改</Button>
                </Space.Compact>
                <Space.Compact style={{ width: '100%' }}>
                    <Input defaultValue={imgUrlInput} placeholder="頭貼圖片位址" onChange={handleImgUrlInputChange} />
                    <Button type='primary' onClick={handleImgUrlClick}>修改</Button>
                </Space.Compact>
                <Space.Compact size="middle">
                    <Input defaultValue={displayTextInput} placeholder="顯示文字" onChange={handleDisplayTextInputChange} />
                    <Input defaultValue={hyperlinkInput} placeholder="超連結" onChange={handleHyperlinkInputChange} />
                    <Button type='primary' onClick={handleWebsiteClick}>修改</Button>
                </Space.Compact>
            </Space>
        </Card>
    );
}

export default Profile;