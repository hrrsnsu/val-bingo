import React from "react";
import styled from "styled-components";
import Header from "./components/Header"
import Card from "./components/Card"
import {originalInfo} from "./data.js"

function App() {
  
  //select 25 from the array
  const [info, setInfo] = React.useState(originalInfo)

  const card = info.map(item => {
    return(
      <Card key={item.length} item={item}/>
    )
  })

  function shuffle(array) {
    let shuffled = [...array]
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled
  }

  function randomizeBoard(){
    setInfo(prevInfo=> shuffle(prevInfo))
  }
  
  return (
    <Wrapper>
      <Header/>
      <Board>
        {card}
      </Board>
      <Button onClick={randomizeBoard}>Randomize</Button>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const Board = styled.div`
  display:flex;
  flex-flow:row wrap;
  position:relative;
  width:100%;
  justify-content: center;
`

const Button = styled.button`
  margin: 10px;
  font-size: 50px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  border: 5px solid black;
  border-radius: 30px;
  background-color: #FD4556;
`;

