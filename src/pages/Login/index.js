import { Card } from 'antd'
import logo from '@/assets/logo.png'
import { Form, Input, Button, Checkbox } from 'antd'
import './index.scss'
// const onFinish = values => {
//     console.log(values)
//   }
const Login = () => {
    const onFinish = (values) =>{
        console.log(values)
    }
     
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish= {onFinish} validateTrigger= 'onBlur'  >
      <Form.Item 
        name="username"
        rules={[
            { 
                required: true,
                message: 'Please input your username!' },
            {
                pattern:/^1[3-9]\d{9}/,
                message: 'please input correct username'
            }
        
        
        
        
        ]
        }
      >
        <Input size="large" placeholder="Please input your username!" />

      </Form.Item>
      <Form.Item
        name="password"
        rules={
            [{ required: true, message: 'Please input your password!' }]
         }
      > 
        <Input size="large" placeholder="Please input your password" />
      </Form.Item>
      <Form.Item>
        <Checkbox className="login-checkbox-label">
          我已阅读并同意「用户协议」和「隐私条款」
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          登录
        </Button>
      </Form.Item>
    </Form>
      </Card>
    </div>
  )
}

export default Login