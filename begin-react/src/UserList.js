import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    /*
    //**dept에 값을 넣지 않는 경우
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        return () => {
            //return에 선언된 함수는 뒷정리 함수라고 한다
            //clearInterval, clearTimeout
            //라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);
    */

    /*
    //**dept에 값을 넣는 경우
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
        };
    }, [user]); //dept([])에 user를 넣으면 user가 값이 변할 때마다 실행
    */

    /*
    //**dept을 선언하지 않는 경우
    useEffect(() => {
        console.log(user);
    }); //이벤트가 발생시 모든 user정보를 호출
    */

    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() =>
                    dispatch({
                        type: 'TOGGLE_USER',
                        id,
                    })
                }
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button
                onClick={() =>
                    dispatch({
                        type: 'REMOVE_USER',
                        id,
                    })
                }
            >
                삭제
            </button>
            {/*
                () => onRemove(id)가 아닌 onRemove(id)만 있을 경우 
                시작과 동시에 호출 목록 안나옴, 함수를 생성해야함
            */}
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default React.memo(
    UserList,
    (prevProps, nextProps) => nextProps.users === prevProps.users
);
