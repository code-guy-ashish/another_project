import "./CardInfo.css";
import Modal from "../../Modal/Modal"
import { useState } from "react";


const CardInfo = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.descr);
  const [label,setLabel]=useState(props.label);

  return (
    <Modal onClose={() => props.onClose()} >
      {
        edit ? (
          <form
            className="edit_formcc"
            onSubmit={(event) => {
              event.preventDefault();
              setEdit(false);
              if (props.editcard) props.editcard(props.cardId, props.boardId, title, desc,label)
            }}>

            <input className="inputcc" type="text"
              value={title==="No Title"?"":title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea className="custom-scroll textareacc"
              rows={10} 
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input className="inputcc" type="text"
              value={label}
              placeholder="Labels"
              onChange={(e) => setLabel(e.target.value)}
            />
            <button className="buttoncc" type="submit">Submit</button>

          </form>)
          : (
            <div className="cardinfocc">
              <div className="cardtitlecc">
                <span className="titlecc">
                  {title}
                </span>
                <span className="datecc">
                  {props.date}
                </span>
              </div>
              <div className="custom-scroll card_desc_infoplatecc">
              <span>Description : </span>
                {desc}
              </div>
              <div className="card_desc_infoplatecc">
              <span>Labels : </span>
                {label}
              </div>
              <button className="buttoncc" onClick={() => setEdit(true)}>Edit</button>
            </div>)
      }
    </Modal>
  )
}

export default CardInfo
