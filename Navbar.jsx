import { NavLink } from "react-router-dom";
import "./Navbar.css"


export default function Navbar({myclass , links}){


    return (
        <nav className={myclass}>
            <div className="logo">
            <span class="material-symbols-outlined">
                account_balance
                </span><span>My Bank</span>
            </div>
            <div className="login-sign">
        {
            links.map((lin,id)=>{
                return (
                    <NavLink key={id}  to={`${lin.toLowerCase()==="signup" ? '/' :lin.toLowerCase()}`}>{lin}</NavLink>
                )
            })
        }
        </div>
        
        </nav>

    )
}