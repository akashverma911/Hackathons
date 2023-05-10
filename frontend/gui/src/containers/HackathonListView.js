import React, { useEffect, useState } from 'react'
import Hackathons from '../components/Hackathon'
import axios from 'axios'
import HackathonForm from '../components/HackathonForm'

const HackathonListView = () => {

  const [hackathon, setHackathon] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/hackathons/hackathons/')
      .then(resonse => {
        setHackathon(resonse.data)
      })
  }, [])

  return (
    <div>
      <Hackathons data={hackathon} />
      <br></br>
      <h2>Create a hackathon</h2>
      <HackathonForm requestType="post" articleID={null} btnText="Post" />
    </div>
  )
}

export default HackathonListView