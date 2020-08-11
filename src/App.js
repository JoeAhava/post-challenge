import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: uuidv4(),
          header: 'Upcomming Tech',
          detail: ' lorem ipsum doller samet ',
          comments: [
            {
              id: uuidv4(),
              detail: 'nice one :)'
            }
          ]
        }
      ],
      temp: {}
    }
  }

  handleChange = (e, postId) => {
    this.setState({
      temp: e.target.value,
      postIdTemp: postId

    })
  }
  handleSubmit = (postId, e) => {
    e.preventDefault();
    let { posts } = this.state;
    posts.forEach(post => {
      if (post.id === postId) {
        console.log('loop')
        post.comments.push({ id: uuidv4(), detail: this.state.temp })
      }
    })
    this.setState({ posts })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className='nav'>
            Posts
        </nav>
        </header>
        <main>
          <div className='posts' >
            {this.state.posts.map(post => {
              return (
                <div key={post.id} className='post'>
                  <div className='post-headline'>
                    {post.header}
                  </div>
                  <div className='post-detail'>{post.detail}</div>
                  <div className='post-comments'>
                    {post.comments.map(comment => {
                      return (
                        <div key={comment.id} className='post-comment'>
                          <div className='comment-circle'></div>
                          <div className='post-comment-detail'>{comment.detail}</div>

                        </div>
                      )
                    })}
                    <form onSubmit={(e) => this.handleSubmit(post.id, e)} className='comment-add'>
                      <textarea type='textarea' onChange={(e) => this.handleChange(e, post.id)} className='comment-add-input' placeholder='leave your comment' />
                      <input type='submit' className='comment-add-submit' value='Submit' />
                    </form>
                  </div>
                </div>
              )
            })
            }
          </div>

        </main>
      </div>
    );
  }
}

export default App;
