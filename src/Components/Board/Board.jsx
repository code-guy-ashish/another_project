import { Trash2 } from "react-feather";
import "./Board.css";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";

const Board = (props) => {
  return (
    <div  data-testid="boardid" className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title}
          <span className="taskcount">{`  Total Tasks:${props.board?.cards?.length}`}</span>
        </p>
        <Trash2 onClick={() => props.removeBoard(props.board?.id)} />
      </div>
      <div
        onDragEnd={(e) => {
          props.handleDragEnd(e.target[Object.keys(e.target)[0]]["return"].key, props.board?.id);
        }}
        onDragEnter={(e) => {
          if (props.board?.cards.length === 0) {
            props.handleDragEnter(null, props.board?.id);
          }
        }}

        className="board_cards custom-scroll">
        {
          props.board?.cards.map((item) => {
            return <Card key={item.id}
              card={item}
              removeCard={props.removeCard}
              boardId={props.board?.id}
              handleDragEnter={props.handleDragEnter}
              handleDragEnd={props.handleDragEnd}
              editcard={props.editcard}
            />
          })
        }
        <Editable
          text="Add Card"
          placeholder="Enter Card Title"
          card_prop={true}
          onCardSubmit={(value, desc, label, lab_col) => props.addCard(value, props.board?.id, desc, label, lab_col)}
        />
      </div>
    </div>
  )
}

export default Board
