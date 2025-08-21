import { Link } from 'react-router-dom';
import css from './RegistrationPage.module.css';

import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

const RegistrationPage = () => {
  const onFinish = values => {
    console.log('Form values:', values);
  };

  return (
    <div className={css.container}>
      <h2>Registration</h2>
      <Form name="registration" layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

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
            Register
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Text>
          Do you already have an account? <Link to="/login">Login</Link>
        </Text>
      </div>
    </div>
  );
};

export default RegistrationPage;
