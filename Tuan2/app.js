const API_URL = 'http://localhost:3000';

// ===== POSTS FUNCTIONS =====

async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

async function fetchMaxPostId() {
    try {
        const response = await fetch(`${API_URL}/maxPostId`);
        const data = await response.json();
        return data || 0;
    } catch (error) {
        console.error('Error fetching maxPostId:', error);
        return 0;
    }
}

async function updateMaxPostId(newMax) {
    try {
        await fetch(`${API_URL}/maxPostId`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMax)
        });
    } catch (error) {
        console.error('Error updating maxPostId:', error);
    }
}

async function createPost() {
    const title = document.getElementById('postTitle').value.trim();
    const views = parseInt(document.getElementById('postViews').value) || 0;

    if (!title) {
        alert('Vui lòng nhập tiêu đề!');
        return;
    }

    try {
        const maxId = await fetchMaxPostId();
        const newId = String(maxId + 1);

        const newPost = {
            id: newId,
            title: title,
            views: views,
            isDeleted: false
        };

        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        await updateMaxPostId(maxId + 1);
        resetPostForm();
        loadPosts();
        updateCommentPostOptions();
        alert('✅ Tạo post thành công!');
    } catch (error) {
        console.error('Error creating post:', error);
        alert('❌ Lỗi khi tạo post! ' + error.message);
    }
}

async function updatePost(id, updates) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });

        if (response.ok) {
            loadPosts();
        }
    } catch (error) {
        console.error('Error updating post:', error);
        alert('Lỗi khi cập nhật post!');
    }
}

async function deletePost(id) {
    if (confirm('Bạn có chắc muốn xoá bài viết này?')) {
        await updatePost(id, { isDeleted: true });
    }
}

async function restorePost(id) {
    await updatePost(id, { isDeleted: false });
}

async function loadPosts() {
    const posts = await fetchPosts();
    const postsList = document.getElementById('postsList');

    if (posts.length === 0) {
        postsList.innerHTML = '<div class="empty-message">Chưa có bài viết nào</div>';
        return;
    }

    postsList.innerHTML = posts.map(post => `
        <div class="item ${post.isDeleted ? 'deleted' : ''}">
            <div class="item-content">
                <div class="item-id">ID: ${post.id}</div>
                <div class="item-title">${post.title}</div>
                <div class="item-views">👁️ ${post.views} lượt xem</div>
            </div>
            <div class="item-actions">
                ${post.isDeleted ? `
                    <button class="restore" onclick="restorePost('${post.id}')">Khôi phục</button>
                ` : `
                    <button class="delete" onclick="deletePost('${post.id}')">Xoá</button>
                `}
            </div>
        </div>
    `).join('');
}

function resetPostForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('postViews').value = '0';
}

// ===== COMMENTS FUNCTIONS =====

async function fetchComments() {
    try {
        const response = await fetch(`${API_URL}/comments`);
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}

async function fetchMaxCommentId() {
    try {
        const response = await fetch(`${API_URL}/maxCommentId`);
        const data = await response.json();
        return data || 0;
    } catch (error) {
        console.error('Error fetching maxCommentId:', error);
        return 0;
    }
}

async function updateMaxCommentId(newMax) {
    try {
        await fetch(`${API_URL}/maxCommentId`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMax)
        });
    } catch (error) {
        console.error('Error updating maxCommentId:', error);
    }
}

async function createComment() {
    const postId = document.getElementById('commentPostId').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!postId || !text) {
        alert('Vui lòng chọn Post và nhập bình luận!');
        return;
    }

    try {
        const maxId = await fetchMaxCommentId();
        const newId = String(maxId + 1);

        const newComment = {
            id: newId,
            text: text,
            postId: postId,
            isDeleted: false
        };

        const response = await fetch(`${API_URL}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        await updateMaxCommentId(maxId + 1);
        resetCommentForm();
        loadComments();
        alert('✅ Tạo comment thành công!');
    } catch (error) {
        console.error('Error creating comment:', error);
        alert('❌ Lỗi khi tạo bình luận! ' + error.message);
    }
}

async function updateComment(id, updates) {
    try {
        const response = await fetch(`${API_URL}/comments/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });

        if (response.ok) {
            loadComments();
        }
    } catch (error) {
        console.error('Error updating comment:', error);
        alert('Lỗi khi cập nhật bình luận!');
    }
}

async function deleteComment(id) {
    if (confirm('Bạn có chắc muốn xoá bình luận này?')) {
        await updateComment(id, { isDeleted: true });
    }
}

async function restoreComment(id) {
    await updateComment(id, { isDeleted: false });
}

async function loadComments() {
    const comments = await fetchComments();
    const commentsList = document.getElementById('commentsList');

    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="empty-message">Chưa có bình luận nào</div>';
        return;
    }

    commentsList.innerHTML = comments.map(comment => `
        <div class="item ${comment.isDeleted ? 'deleted' : ''}">
            <div class="item-content">
                <div class="item-id">ID: ${comment.id} | Post ID: ${comment.postId}</div>
                <div class="item-text">${comment.text}</div>
            </div>
            <div class="item-actions">
                ${comment.isDeleted ? `
                    <button class="restore" onclick="restoreComment('${comment.id}')">Khôi phục</button>
                ` : `
                    <button class="delete" onclick="deleteComment('${comment.id}')">Xoá</button>
                `}
            </div>
        </div>
    `).join('');
}

function resetCommentForm() {
    document.getElementById('commentPostId').value = '';
    document.getElementById('commentText').value = '';
}

async function updateCommentPostOptions() {
    const posts = await fetchPosts();
    const activePostsSelect = document.getElementById('commentPostId');

    activePostsSelect.innerHTML = '<option value="">Chọn Post</option>' + 
        posts
            .filter(p => !p.isDeleted)
            .map(post => `<option value="${post.id}">${post.id} - ${post.title}</option>`)
            .join('');
}

// ===== INITIALIZATION =====
async function init() {
    loadPosts();
    loadComments();
    updateCommentPostOptions();
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', init);
