import React from 'react'
import PostItem from "./PostItem";

export default function PostList({posts, title}) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem post={post} key={post.id} />
            )}
        </div>
    );
};