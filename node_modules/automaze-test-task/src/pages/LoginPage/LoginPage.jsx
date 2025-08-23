import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import css from './LoginPage.module.css';

const { Title, Text: AntText } = Typography;

const LoginPage = () => {
  const onFinish = values => {
    console.log('Login values:', values);
    // Здесь будет логика авторизации
  };

  return (
    <div className={css.container}>
      <h2 level={2}>Login</h2>

      <Form name="login" onFinish={onFinish} layout="vertical" autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
          style={{ marginBottom: 45 }}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <AntText>
          Don't have an account? <Link to="/">Register</Link>
        </AntText>
      </div>
    </div>
  );
};

export default LoginPage;
