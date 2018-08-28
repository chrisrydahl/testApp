import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import sendMessage from '../api/sendMessage';
import './MessageForm.css';

const FormItem = Form.Item;
const { TextArea } = Input;

class MessageForm extends Component {
	constructor() {
		super();
		this.state = {
			alertSuccessVisible: false,
			alertErrorVisible: false,
		}
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields(async (err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        try {
	        	await sendMessage(values);
	        	// Show success message after sending, this message remains 5 seconds
	        	this.setState({alertSuccessVisible: true}, () => setTimeout(() => this.setState({alertSuccessVisible: false, alertErrorVisible: false}), 5000));
	        } catch (err) {
            // Show error message if counter un error, this message remains 5 seconds
	        	this.setState({alertErrorVisible: true}, () => setTimeout(() => this.setState({alertSuccessVisible: false, alertErrorVisible: false}), 5000));
	        }
	      }
	    });
    };

	render() {
		const { getFieldDecorator } = this.props.form;
		const alertSuccess = this.state.alertSuccessVisible ? (
            <Alert
              message="Your message has been sent successfully!"
              type="success"
              showIcon
            />
          ) : null;

    const alertError = this.state.alertErrorVisible ? (
            <Alert
              message="Oops! There is something wrong...Try again later!"
              type="error"
              showIcon
            />
          ) : null;

	  return (
	  		<div>
	  		{alertSuccess}
	  		{alertError}
	  		<br/>
	  		<Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem>
	          {getFieldDecorator('name', {
	            rules: [{ required: true, message: 'Please input your name!' }, { max: 30, message: 'Not larger than 30 characters!'}],
	          })(
	            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your name" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('subject', {
	            rules: [{ required: true, message: 'Please input your subject!' }, { max: 100, message: 'Not larger than 100 characters!'}],
	          })(
	            <Input prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your subject" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('email', {
	            rules: [{ required: true, message: 'Please input your email!' }, { max: 120, message: 'Not larger than 120 characters!'}],
	          })(
	            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Your email" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('body', {
	            rules: [{ required: true, message: 'Please input your message!' }, { max: 1000, message: 'Not larger than 1000 characters!'}],
	          })(
	            <TextArea rows={4} prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your message body" />
	          )}
	        </FormItem>
	        <Button type="primary" htmlType="submit" className="login-form-button">
	            Submit
	        </Button>
	      </Form>
	      </div>
	  	);
	}
}

export default Form.create()(MessageForm);
