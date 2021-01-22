import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    };

    return (
        <ThemeProvider theme={{ palette }}>
            <>
                <AppBlock>
                    <ButtonGroup>
                        <Button color="pink" size="large">
                            BUTTON
                        </Button>
                        <Button>BUTTON</Button>
                        <Button color="gray" size="small">
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="pink" size="large" outline>
                            BUTTON
                        </Button>
                        <Button outline>BUTTON</Button>
                        <Button color="gray" size="small" outline>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="pink" size="large" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" fullWidth>
                            BUTTON
                        </Button>
                        <Button color="gray" size="large" fullWidth>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog
                    title="정말로 삭제하시겠습니까?"
                    confirmText="삭제"
                    cancleText="취소"
                >
                    데이터를 정말로 삭제하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;
