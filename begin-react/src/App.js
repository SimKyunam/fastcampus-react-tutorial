import React, {
    useRef,
    useReducer,
    useMemo,
    useCallback,
    createContext,
} from 'react';
import produce from 'immer';
import CreateUser from './CreateUser';
import UserList from './UserList';

window.produce = produce;

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: '홍길동',
            email: 'test@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'test',
            email: 'tester@gmail.com',
            active: false,
        },
        {
            id: 3,
            username: 'tester3',
            email: 'tester3@gmail.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        // return {
        //     users: state.users.concat(action.user)
        // }
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
        // return {
        //     users: state.users.map(user =>
        //         user.id === action.id
        //             ? { ...user, active: !user.active }
        //             : user
        //     ),
        // };
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(
                    user => user.id === action.id
                );
                draft.users.splice(index, 1);
            });
        // return {
        //     users: state.users.filter(user => user.id !== action.id),
        // };
        default:
            throw new Error('Unhandled action');
    }
}

export const UserDispatch = createContext(null);
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성 사용자 수: {count}</div>
        </UserDispatch.Provider>
    );
}

/* 
// 기존 소스
function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const onChange = useCallback(
        e => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const [users, setUsers] = useState([
        {
            id: 1,
            username: '홍길동',
            email: 'test@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'test',
            email: 'tester@gmail.com',
            active: false,
        },
        {
            id: 3,
            username: 'tester3',
            email: 'tester3@gmail.com',
            active: false,
        },
    ]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // setUsers([...users, user]);
        setUsers(users => users.concat(user));
        //setUsers(users.push(user)); //작동 안됌.. split도 안됌 사용 X

        setInputs({
            username: '',
            email: '',
        });

        console.log(nextId.current);
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(id => {
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users =>
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}
*/

export default App;
