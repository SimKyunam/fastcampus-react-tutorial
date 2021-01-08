import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { //class에서 변수는 무조건 객체({})여야 한다.
    //         counter: 0,
    //     };
    //     // this.handleIncrease = this.handleIncrease.bind(this); //bind 해당 함수에 this를 정의해준다
    //     // this.handleDecrease = this.handleDecrease.bind(this);
    // }

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        },
    };

    handleIncrease = () => {
        //함수형 상태변경과 일반 상태변경에 차이
        //함수형 상태변경 같은게 여러개 있으면 그 만큼 증가 ex) 4개 만들면 4씩 증가
        //일반 상태변경 함수는 값이 동일하게 증가 ex) 4개 만들면 1씩 증가

        // 일반 상태변경
        // this.setState({
        //     counter: this.state.counter + 1,
        // });

        // 함수형 상태변경
        this.setState(state => ({
            counter: state.counter + 1,
        }));
    };

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    // handleToggle = () => {
    //     this.setState({
    //         updateMe: {
    //             ...this.state.updateMe,
    //             toggleMe: !this.state.updateMe.toggleMe,
    //         },
    //     });
    // };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값:{this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT',
//         });
//     };
//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT',
//         });
//     };

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

export default Counter;
