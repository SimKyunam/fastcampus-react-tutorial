import Hello from './Hello';
import './App.css';

function App() {
    // () 는 가독성을 위해서 사용하는 것, 안써도 소스는 돌아간다.
    // 아래에 코드는 jsx, babel에서 제공해주는 것
    const name = 'react';
    //스타일은 객체로 넣어줘야한다.
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem',
    };
    return (
        //두개에 태그는 <>나 <div>로 꼭 감싸줘야한다!
        <>
            {/*주석 테스트*/}
            <Hello
            //이런식으로 작성하는 주석은 안나타남
            />
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
        </>
    );
}

export default App;
