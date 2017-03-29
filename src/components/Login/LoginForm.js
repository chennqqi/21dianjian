/**
 * Created by fujinliang on 17/3/27.
 */
import React, { Component } from 'react';
import styles from './Login.css';
import { Row, Col, Form, Input, Icon, Button, Checkbox } from 'antd';


const FormItem = Form.Item;
class LoginForm extends Component {

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onSubmit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row className={styles.loginRow} type="flex" justify="space-around" align="middle">
        <Col span={24}>
          <Form className={styles.loginForm}>
            <h2 style={{ marginBottom: 20 }}>后台管理系统</h2>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit} htmlType="submit" className={styles.loginFormButton}>
                Log in
              </Button>
              Or <a>register now!</a>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({})(LoginForm);
