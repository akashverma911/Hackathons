import React, { useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, InputNumber, Select, DatePicker, Upload } from 'antd';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


const HackathonForm = (props) => {
    const [form] = Form.useForm();

    const handleFormSubmit = (event, requestType, hackathonID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const background_image = event.target.elements.background_image.files[0];
        console.log(background_image.name)
        const formData = new FormData()
        formData.append('image', background_image.name)
        console.log(formData)
        const hackathon_image = event.target.elements.hackathon_image.value;
        console.log(hackathon_image)

        const submission_type = event.target.elements.submission_type.value;
        const start_datetime = event.target.elements.start_datetime.value;
        const end_datetime = event.target.elements.end_datetime.value;
        const reward_prize = event.target.elements.reward_prize.value;



        switch (requestType) {
            
            case 'post':
            axios.post('http://127.0.0.1:8000/hackathons/hackathons/', {
                    title: title,
                    description: description,
                    background_image: background_image,
                    hackathon_image: hackathon_image,
                    submission_type: submission_type,
                    start_datetime: start_datetime,
                    end_datetime: end_datetime,
                    reward_prize: reward_prize,
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            case 'put':
                axios.put(`http://127.0.0.1:8000/hackathons/hackathons/${hackathonID}`, {
                    title: title,
                    description: description,
                    background_image: background_image,
                    hackathon_image: hackathon_image,
                    submission_type: submission_type,
                    start_datetime: start_datetime,
                    end_datetime: end_datetime,
                    reward_prize: reward_prize
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
        }
    }

    

    return (
        <Form onSubmitCapture={(event) => handleFormSubmit(
            event,
            props.requestType,
            props.hackathonID
        )}>
            <Form.Item name="title" label="Title">
                <Input  placeholder="Enter a Title" />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input  placeholder="Enter some description..." />
            </Form.Item>
            <Form.Item label="Upload Background Image" name="background_image">
                <Input type="file" placeholder="Upload Image" />
            </Form.Item>
            <Form.Item
                name="hackathon_image"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
        <Form.Item label="Type" name="submission_type">
                <Select>
                    <Select.Option value="image">Image</Select.Option>
                    <Select.Option value="file">File</Select.Option>
                    <Select.Option value="link">Link</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Start day" name="start_datetime">
                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </Form.Item>
            <Form.Item label="End day" name="end_datetime" >
                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </Form.Item>
            <Form.Item label="Reward Prize" name="reward_prize">
                <InputNumber />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>{props.btnText}</Button>
            </Form.Item>
        </Form>
    );
};
export default HackathonForm;