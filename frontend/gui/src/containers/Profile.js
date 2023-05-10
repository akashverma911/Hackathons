import React, { useState, useEffect } from 'react'
import { Avatar, List } from 'antd';
import axios from 'axios'

const Profile = () => {
  const [data,setData]=useState([])
  useEffect(() => {
        axios.get('http://127.0.0.1:8000/hackathons/hackathon-submissions/')
            .then(resonse => {
                setData(resonse.data)
            })
    }, [])
    console.log(data)
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.hackathon.title}</a>}
          description={item.user.username}
        />
      </List.Item>
    )}
  />
  )
}

export default Profile