import { Delete, GripHorizontal, PanelBottomClose, Pencil, Plus, PlusCircle, Trash2, X } from "lucide-react"
import "./css/home.scss"
import { act, useEffect, useState } from "react"
import { motion, useDragControls } from "framer-motion"



function Home() {
    const [elements, setElements] = useState(
        localStorage.getItem('myElements') ?
            JSON.parse(localStorage.getItem('myElements'))
            : []
    )
    const [activeElement, setActiveElement] = useState(null)
    const [modal, setModal] = useState(false)
    const dragControls = useDragControls()


    const HandleSubmit = (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)

        setElements(prev =>
            prev.map((element) =>
                element.id === activeElement.id ?
                    {
                        ...element,
                        name: dataForm.get('_name'),
                        age: dataForm.get('_age'),
                        option: dataForm.get('_option'),
                    }
                    : element
            )
        )

        setModal(false)
    }

    useEffect(() => {
        try {
            window.localStorage.setItem('myElements', JSON.stringify(elements));
        } catch (error) {
            console.error("Error setting localStorage key:", error);
        }
    }, [elements]);


    const AddElement = () => {
        setElements(prev => [
            ...prev,
            {
                id: Date.now()
            }
        ])
    }

    const RemoveElement = (id) => {
        setElements(prev =>
            prev.map(element => (
                element.id === id ? { ...element, removed: true } : element
            ))
        )
        setElements(prev => prev.filter(element => element.id != id))
    }

    // const [bg, setBg] = useState("")
    const bgChange = (id, e) => {
        e.preventDefault()
        setElements(prev => (
            prev.map((element) =>
                element.id === id ?
                    {
                        ...element,
                        background: e.target.value
                    } :
                    element
            )
        ))
    }

    return (
        <div className="homePage page relative">
            <div className="flex flex-wrap">
                {
                    elements.map((element) => (
                        <div className="box duration-300" key={element.id}>
                            <div className="flex justify-around items-center mt-2 border-b-1 border-red border-dashed bg-[wite]">
                                <button className="h-[25px] w-[25px] bg-[var(--my-button-hover-color)] hover:bg-[var(--my-button-active-color)] flex justify-center items-center rounded-[50%] cursor-pointer"
                                    onClick={() => {
                                        setModal(true),
                                            setActiveElement(element)
                                    }}>
                                    <Pencil className="h-[15px] w-[15px] stroke-1" />
                                </button>

                                <button className="h-[25px] w-[25px] bg-[var(--my-button-hover-color)] hover:bg-red-300 flex justify-center items-center rounded-[50%] cursor-pointer"
                                    onClick={() => { RemoveElement(element.id) }}>
                                    <Trash2 className="h-[15px] w-[15px] stroke-1" />
                                </button>
                            </div>
                            <div>

                                {
                                    (element.name && element.age) &&
                                    <div style={{ backgroundColor: `${element.background}`, display: 'flex' }}>
                                        Nom : {element.name} <br />
                                        Age : {element.age} <br />
                                        Option : {element.option} <br />
                                        Background : {element.background}
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="creation-container bg-[#ffffff] h-[200px] w-[200px] border-dashed border-2 rounded-[5px] m-[5px] border-gray-800">
                    <button className="btn h-[100%] w-[100%]" onClick={() => AddElement()}>
                        <PlusCircle className="h-[100%] w-[100%] stroke-1" />
                    </button>
                </div>
            </div>

            {modal && (
                <div className="modalOverlay">
                    <motion.div
                        className="modalWindow relative"
                        drag
                        dragControls={dragControls}
                        dragMomentum={false}
                    >

                        <div className="flex justify-between items-center mb-5 sticky top-0 bg-[#ffffff] shadow-md p-3">
                            <h2 className="h-[25px] flex justify-center items-center bg-[var(--my-button-hover-color)] pl-[10px] pr-[10px] rounded-[50px]">BOX : {activeElement.name ? activeElement.name : activeElement.id}</h2>
                            <div >
                                <GripHorizontal className="text-[grey] cursor-grab"></GripHorizontal>
                            </div>
                            <button className="h-[25px] w-[25px] flex justify-center items-center bg-[var(--my-button-hover-color)] hover:bg-red-400 hover:text-[#ffffff] cursor-pointer rounded-[50%] transition-in duration-100" onClick={() => setModal(false)}><X className="stroke-1"></X></button>
                        </div>
                        <form onSubmit={HandleSubmit} className="pl-5 pr-5">
                            <label htmlFor="_name">Option</label>
                            <select name="_option" required className="border-solid border-1 w-[100%] h-[40px] mb-2 mt-2 rounded-[15px] pl-2"
                                placeholder='Insert your name'>
                                <option className="bg-[var(--my-button-active-color)] text-[#ffffff]" value="" disabled>Select an option</option>
                                <option value="option_1">Option 1</option>
                                <option value="option_2">Option 2</option>
                                <option value="option_3">Option 3</option>
                                <option value="option_4">Option 4</option>
                                <option value="option_5">Option 5</option>
                            </select>

                            <label htmlFor="_name">Name</label>
                            <input name="_name" defaultValue={activeElement.name} required className="border-solid border-1 w-[100%] h-[40px] mb-2 mt-2 rounded-[15px] pl-2" placeholder='Insert your name' />

                            <label htmlFor="_age">Age</label>
                            <input name="_age" defaultValue={activeElement.age} required className="border-solid border-1 w-[100%] h-[40px] mb-2 mt-2 rounded-[15px] pl-2" placeholder='Insert your age' />

                            <label htmlFor="_code">SQL request</label>
                            <textarea name="_code" id="" className="min-h-[150px] border-solid border-1 w-[100%] h-[40px] mb-2 mt-2 rounded-[15px] p-2">

                            </textarea>

                            <div className="flex justify-between">
                                <button type="submit" className="btn bg-green-500 text-[#ffffff]">Save</button>
                            </div>
                        </form>

                        <input name="_background" type="color" className="mb-5 ml-5"
                            defaultValue={activeElement.background ? activeElement.background : '#ffffff'}
                            onChange={(e) => bgChange(activeElement.id, e)}
                        />
                    </motion.div>

                </div>
            )}
        </div>
    )
}

export default Home