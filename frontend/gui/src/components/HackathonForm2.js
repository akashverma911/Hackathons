import React, { useState } from 'react';
import axios from 'axios';

const HackathonForm2 = (props) => {

    console.log(props)

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const background_image = event.target.elements.background_image.files[0];
        const hackathon_image = event.target.elements.hackathon_image.files[0];
        const submission_type = event.target.elements.submission_type.value;
        const start_datetime = event.target.elements.start_datetime.value;
        const end_datetime = event.target.elements.end_datetime.value;
        const reward_prize = event.target.elements.reward_prize.value;
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('description', description);
        form_data.append('background_image', background_image);
        form_data.append('hackathon_image', hackathon_image);
        form_data.append('submission_type', submission_type);
        form_data.append('start_datetime', start_datetime);
        form_data.append('end_datetime', end_datetime);
        form_data.append('reward_prize', reward_prize);
        let url = 'http://localhost:8000/hackathons/hackathons/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" placeholder='Title' id='title'/>
                </p>
                <p>
                    <input type="text" placeholder='Description' id='description'/>
                </p>
                <p>
                    <input type="file"
                        id="background_image"
                        accept="image/png, image/jpeg"/>
                </p>
                <p>
                    <input type="file"
                        id="hackathon_image"
                        accept="image/png, image/jpeg" />
                </p>
                <p>
                    <select id="submission_type" placeholder="Submission Type">
                        <option value="file">File</option>
                        <option value="image">Image</option>
                        <option value="link">Link</option>
                    </select>
                </p>
                <p>
                    <input type="datetime-local" id="start_datetime" label='Starting DateTime'/>
                </p>
                <p>
                    <input type="datetime-local" id="end_datetime" label='Ending DateTime' />
                </p>
                <p>
                    <input type="text" placeholder='Reward' id="reward_prize" />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
};
export default HackathonForm2;