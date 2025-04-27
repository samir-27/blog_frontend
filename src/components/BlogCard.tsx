import React, { useState, useEffect } from "react";

const BlogCard = ({ blog }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
    if (!showComments) {
      fetchComments();
    }
  };

  const fetchComments = async () => {
    const response = await fetch(`http://localhost:3000/comment/post/${blog.id}`);
    const data = await response.json();
    setComments(data);
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    const response = await fetch(`http://localhost:3000/comment/post/${blog.id}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ comment: newComment }),
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments((prev) => [...prev, newCommentData]);
      setNewComment("");
    } else {
      console.error("Failed to submit comment");
    }
  };

  return (
    <div className="mx-56 p-5">
      <div className="bg-white border rounded-lg">
        {/* Image Section */}
        {blog.imageUrl && (
          <div className="p-4">
            <img
              src={blog.imageUrl}
              alt="Blog"
              className="w-full mx-auto rounded-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-600">{blog.content}</p>
        </div>

        {/* Author Info */}
        <div className="flex items-center p-4 border-t border-gray-200">
          {blog.user?.image && (
            <img
              src={blog.user.image}
              alt={blog.user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <p className="text-gray-800 font-semibold">{blog.user?.name}</p>
        </div>

        {/* Comment Button */}
        <div className="p-4 flex justify-between items-center">
          <button
            onClick={handleToggleComments}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            {showComments ? "Hide Comments" : "View Comments"}
          </button>
        </div>

        {/* New Comment Form */}
        {showComments && (
          <div className="p-4 border-t border-gray-200">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 text-white bg-blue-600 hover:bg-blue-800 p-2 rounded"
            >
              Submit Comment
            </button>
          </div>
        )}

        {/* Comments Section */}
        {showComments && (
          <div className="p-4 border-t border-gray-200">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="mb-4 border border-gray-500 rounded-md p-2">
                  <p className="font-semibold">{comment.user.name}</p>
                  <p className="text-gray-600">{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No comments yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
