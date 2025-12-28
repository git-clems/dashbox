import { useEffect, useState } from "react"
import "./css/sideBar.scss"
import { Link, NavLink } from "react-router-dom"
import { ArrowUpRight, BanknoteArrowDown, Boxes, Car, ChevronLeft, HandCoins, Handshake, Home, Menu, MessageSquareMore, Settings, ShoppingBag, Truck, Undo2, Undo2Icon, User, UsersRound } from "lucide-react"

const SideBar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className={`sideBar ${open ? "open" : ""}`} >
            <div className="top-container">
                <div className={`header `}>
                    <button className="btnSideBar justify-center items-center " onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                    </button>
                </div>

                <div className="navlinks">
                    <NavLink to={'/'} className="link"><div className="icon"><Home /></div>{open && <span>Home</span>}</NavLink>
                    <NavLink to={'/orders'} className="link"><div className="icon"><ShoppingBag /></div>{open && <span>Orders</span>}</NavLink>
                    <NavLink to={'/delivery'} className="link"><div className="icon"><Truck /></div>{open && <span>Delivery</span>}</NavLink>
                    <NavLink to={'/sales'} className="link"><div className="icon"><ArrowUpRight /></div>{open && <span>Sales</span>}</NavLink>
                    <NavLink to={'/cashback'} className="link"><div className="icon"><HandCoins /></div>{open && <span>Cashback</span>}</NavLink>
                    <NavLink to={'/products'} className="link"><div className="icon"><Boxes /></div>{open && <span>Stock</span>}</NavLink>
                    <NavLink to={'/return'} className="link"><div className="icon"><Undo2 /></div>{open && <span>Returns</span>}</NavLink>
                    <NavLink to={'/clients'} className="link"><div className="icon"><UsersRound /></div>{open && <span>Clients</span>}</NavLink>
                    <NavLink to={'/partners'} className="link"><div className="icon"><Handshake /></div>{open && <span>Partners</span>}</NavLink>
                    <NavLink to={'/message'} className="link"><div className="icon"><MessageSquareMore strokeWidth={1.25}/></div>{open && <span>Message</span>}</NavLink>
                    <NavLink to={'/purshasse'} className="link"><div className="icon"><BanknoteArrowDown  strokeWidth={1.25} /></div>{open && <span>Purshass</span>}</NavLink>
                </div>
            </div>
            <div className="bottom-container">
                <NavLink to={'parameter'} className="link"><div className="icon"><Settings /></div>{open && <span>Settings</span>}</NavLink>
            </div>
        </div>
    )
}


export default SideBar