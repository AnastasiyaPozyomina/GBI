import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostList = ({posts}) => {
  return (
    <div className="post-list">
      {posts.map (post => (
        <Card style={{width: '18rem'}}>
          <Card.Body>
          <Card.Title>{post.id} </Card.Title>
            <Card.Title>{post.title} </Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
            <Button variant="primary">Читать</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  );
};

export default PostList;
