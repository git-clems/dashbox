import "./css/appBar.scss"
import DatePiker from "./datePicker"
import "bootstrap"


const AppBar = () => {


    window.addEventListener("scroll", () => {
        const page = document.querySelector(".page");
        const pageRectTop = page.getBoundingClientRect().top;

        const AppBar = document.querySelector('.appBar')
        if (pageRectTop < 80) {
            AppBar.style.backgroundColor = "white"
            AppBar.style.boxShadow = "10px 0px 5px 5px rgba(0, 0, 0, 0.3)"
        } else {
            AppBar.style.backgroundColor = "transparent"
            AppBar.style.boxShadow = ""
        }
    })
    return (
        <div className="appBar">
            <div className="logo flex justify-center items-center">
                <img src="public\logo\Dashbox.png" alt="" />
            </div>
            <div class="searchContainer">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="search-container">
                            <input type="text" class="form-control search-input" placeholder="Search..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-searchfas fa-search search-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <DatePiker />
            <div className="profil">
                <button class="btn btn-ghost btn-circle" style={{ margin: "0px 5px 0px 5px" }}>
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span class="badge badge-xs badge-primary indicator-item">5</span>
                    </div>
                </button>
                <button class="btn btn-ghost btn-circle" style={{ margin: "0px 5px 0px 5px" }}>
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default AppBar