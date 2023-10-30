import { X } from "react-feather"
import "./Editable.css"
import { useState } from "react"
const Editable = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [inputDesc, setDescValue] = useState("");
    const [inputLabel, setLabelValue] = useState("");
    const [showCardInput, setCardInput] = useState(false);
    const [labelColor, setLabelColor] = useState([]);

    const colors = ["#a8193d", "#4fcc25", "#1ebffa", "#8da377", "#9975bd", "#cf61a1", "#240959",];



    return (
        <div data-testid="editid" className="editable" >
            {
                showEdit ? (
                    <form className="editable_edit"
                        onSubmit={(event) => {
                            event.preventDefault();
                            if (props.onSubmit) props.onSubmit(inputValue);
                            if (props.onCardSubmit) {
                                if (inputLabel !== "")
                                    inputLabel.split(",").forEach(() => {
                                        labelColor.push(colors[Math.floor(Math.random() * colors.length)])
                                    })
                                props.onCardSubmit(inputValue, inputDesc, inputLabel, labelColor);
                            }
                            setInputValue("");
                            setDescValue("");
                            setLabelValue("");
                            setLabelColor([]);
                            setShowEdit(false);
                            setCardInput(false);
                        }}>
                        <input
                            id={`main_input${Date.now()+Math.random()*2}`}
                            autoFocus
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={props.placeholder}
                        />

                        {
                            showCardInput ? <>
                                <textarea className="editable_add_card custom-scroll"
                                    id={`desc_input${Date.now()+Math.random()*2}`}
                                    value={inputDesc}
                                    onChange={(e) => setDescValue(e.target.value)}
                                    placeholder="Enter Description" />

                                <input type="text"
                                    id={`label_input${Date.now()+Math.random()*2}`}
                                    value={inputLabel}
                                    onChange={(e) => setLabelValue(e.target.value)}
                                    placeholder="Enter labels" />
                            </> : ""
                        }

                        <div className="editable_edit_footer">
                            <button type="submit">{props.buttonText || "Add"}</button>
                            <X onClick={() => setShowEdit(false)} />
                        </div>
                    </form>
                ) : (<p className="editable_display" onClick={() => {
                    setShowEdit(true)
                    setCardInput(props.card_prop)
                }}>
                    {props.text || "Add Item"}
                </p>)
            }
        </div>
    )
}

export default Editable
