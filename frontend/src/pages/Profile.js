import { Card } from 'antd';
import './Profile.css';
import { useEffect, useState } from 'react';
import { Button, Form, Input, Space, Tooltip, Typography } from 'antd';
import instance from '../axios';

import { db } from '../db';

import { useXss } from '../hooks/xssContext';

const Profile = () => {

    const { login, username, imgUrl, displayText, hyperlink, updateUsername, updateWebsite, updateImgUrl } = useXss();

    const [usernameInput, setUsernameInput] = useState('');
    const [imgUrlInput, setImgUrlInput] = useState('');
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

    const handleUsernameClick = async (e) => {
        await updateUsername(usernameInput);
        setUsernameInput('');
    }
    const handleImgUrlClick = async (e) => {
        await updateImgUrl(imgUrlInput);
        setImgUrlInput('');
    }
    const handleWebsiteClick = async (e) => {
        // console.log('我被呼叫了');
        console.log('displayTextInput =>', displayTextInput)
        setDisplayTextInput('');
        setHyperlinkInput('');
        await updateWebsite(displayTextInput, hyperlinkInput);
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
                        {username}
                    </li>
                    <li>
                        <a href={hyperlink}>{displayText}</a>
                    </li>
                </ul>
            </div>
            <Space direction="vertical" size="middle">
                <Space.Compact style={{ width: '100%' }}>
                    <Input value={usernameInput} placeholder="使用者名稱" onChange={handleUsernameInputChange} />
                    <Button type='primary' onClick={handleUsernameClick}>修改</Button>
                </Space.Compact>
                <Space.Compact style={{ width: '100%' }}>
                    <Input value={imgUrlInput} placeholder="頭貼圖片位址" onChange={handleImgUrlInputChange} />
                    <Button type='primary' onClick={handleImgUrlClick}>修改</Button>
                </Space.Compact>
                <Space.Compact size="middle">
                    <Input value={displayTextInput} placeholder="顯示文字" onChange={handleDisplayTextInputChange} />
                    <Input value={hyperlinkInput} placeholder="超連結" onChange={handleHyperlinkInputChange} />
                    <Button type='primary' onClick={handleWebsiteClick}>修改</Button>
                </Space.Compact>
                <button onClick={login}>
                    使用者登入
                </button>
            </Space>
        </Card>
    );
}

export default Profile;