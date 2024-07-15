import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import backgroundImage2 from '../webrestext.jpg';
import './Login.css';


function Community() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const fetchComments = () => {
    $.ajax({
      url: "http://localhost:8080/getComments",
      method: 'GET',
      dataType: 'json',
      success: (comments) => {
        const commentsDiv = $('#comments');
        commentsDiv.empty(); // Clear existing comments
        comments.forEach((comment) => {
          const commentElement = $(`
            <div class="comment">
              <p><strong>${comment.username}:</strong> ${comment.comment}</p>
            </div>
          `);  commentsDiv.prepend(commentElement);
        });
      },
      error: (error) => {
        console.error('Error fetching comments:', error);
      },
    });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/community', { username, comment });
      fetchComments(); // Refresh comments after submitting
      setUsername('');
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
  <div className="comments-container">
    <h1>Share your thoughts</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label htmlFor="comment">Thoughts:</label>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      <br />
      <button className="login-button" type="submit">Submit Thoughts</button>
    </form>
    <div id="comments">
      {/* Display comments here */}
    </div>
  </div>
  <img src={backgroundImage2} alt="Main_Image" className="image1" />
</div>

  );
}

export default Community;
