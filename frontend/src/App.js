import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

const { Header, Content } = Layout;

const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'profile',
    label: 'Profile',
  },
  {
    key: 'posts',
    label: 'Posts',
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname.slice(1)]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Header>
      <Content
          style={{
              height: '100%',
              margin: '24px 16px',
              padding: 24,
              overflow: 'scroll',
          }}
      >
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/profile/" element={<Profile />} />
          <Route exact path="/posts/" element={<Posts />} />
          <Route exact path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </Content>
    </Layout>
  );
};
export default App;