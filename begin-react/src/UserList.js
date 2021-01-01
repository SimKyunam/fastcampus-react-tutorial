import React from 'react';

function User({ user, onRemove }) {
    const { username, email, id } = user;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            {/*
                () => onRemove(id)가 아닌 onRemove(id)만 있을 경우 
                시작과 동시에 호출 목록 안나옴, 함수를 생성해야함
            */}
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;
