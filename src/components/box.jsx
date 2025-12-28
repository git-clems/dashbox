import './css/box.scss'

const Box = (props) => {
    return (
        <button className="btn boxContainer">
            <div style={{display: 'flex', justifyContent: 'end', width : "100%", fontSize: "15px"}}>{props.label}</div>
            <div style={{display: 'flex', justifyContent: "center", fontSize: "30px",}}>{props.value}</div>
        </button>
    )
}

export default Box