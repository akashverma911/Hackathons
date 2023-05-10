import React, { useEffect, useState } from 'react'
import Articles from '../components/Article'
import axios from 'axios';
import {Button, Card} from 'antd';
import { useParams } from 'react-router';
import CustomForm from '../components/Form';

const ArticleDetailView = (props) => {
    const [article, setArticle] = useState({})

    const articleID = useParams().articleID

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/articles/${articleID}`)
            .then(resonse => {
                setArticle(resonse.data)
            })
    }, [])

    const handleDelete=()=>{
      axios.delete(`http://127.0.0.1:8000/articles/${articleID}/delete/`);
      props.history.push('/');
    }
    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <CustomForm requestType="put" articleID={useParams().articleID} btnText="Update"/>
            <form onSubmit={handleDelete}> 
              <Button type='danger' htmlType='submit'>Delete</Button>
            </form>
        </div>
    )
}

export default ArticleDetailView