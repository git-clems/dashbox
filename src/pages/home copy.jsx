import { Pencil, Plus, PlusCircle, Trash2, X } from "lucide-react"
import "./css/home.scss"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Home() {
    const [elements, setElements] = useState([])
    const [activeElement, setActiveElement] = useState(null)
    const [modal, setModal] = useState(false)

    // ➕ Add element
    const addElement = () => {
        setElements(prev => [
            ...prev,
            {
                id: Date.now(),
                name: "",
                age: "",
                removing: false
            }
        ])
    }

    // ❌ Remove element (with animation)
    const removeElement = (id) => {
        setElements(prev =>
            prev.map(el =>
                el.id === id ? { ...el, removing: true } : el
            )
        )

        setTimeout(() => {
            setElements(prev => prev.filter(el => el.id !== id))
        }, 300)
    }

    // 📝 Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        setElements(prev =>
            prev.map(el =>
                el.id === activeElement.id
                    ? {
                        ...el,
                        name: formData.get("_name"),
                        age: formData.get("_age")
                    }
                    : el
            )
        )

        setModal(false)
    }

    return (
        <div className="homePage page relative">
            <div className="flex flex-wrap">

                <AnimatePresence>
                    {elements.map((el, index) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.1 }}
                            className="box"
                        >
                            <div className="flex justify-between">
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setActiveElement(el)
                                        setModal(true)
                                    }}
                                >
                                    <Pencil />
                                </button>

                                <button className="btn" onClick={() => removeElement(el.id)}>
                                    <Trash2 />
                                </button>
                            </div>

                            <p><b>Name:</b> {el.name || "—"}</p>
                            <p><b>Age:</b> {el.age || "—"}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className="creation-container">
                    <button className="btn h-full w-full" onClick={addElement}>
                        <PlusCircle className="h-full w-full stroke-1" />
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {modal && activeElement && (
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="flex justify-between mb-4">
                            <h2>ID: {activeElement.id}</h2>
                            <button onClick={() => setModal(false)}>
                                <X />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                name="_name"
                                defaultValue={activeElement.name}
                                placeholder="Insert name"
                                required
                            />

                            <input
                                name="_age"
                                defaultValue={activeElement.age}
                                placeholder="Insert age"
                                required
                            />

                            <button type="submit" className="btn bg-green-500">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
