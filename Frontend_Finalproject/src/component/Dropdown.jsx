import { Link } from "react-router-dom";
export default function Dropdown(){
    return(
        <div className="flex flex-col absolute top-24 right-24 w-44 p-3 bg-Empty rounded-2xl">
            <ul className="flex flex-col gap-4 items-start pl-2">
            <Link to="/Profile" reloadDocument>
                    <li className="font-bold text-black">Profile</li>
            </Link>
                <li className="font-bold text-black">Upcoming</li>
                <li className="font-bold text-black">History</li>
                <li className="font-bold text-black">Logout</li>
            </ul>
        </div>
    )
}