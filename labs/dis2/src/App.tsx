import './App.css'
import {CourseStaff} from "./components/course-staff.tsx";

export default function App() {
    return (
        <div>
            <h2>Welcome to my first React application!</h2>
            <div>
                <CourseStaff name="Taymaz" title="Professor" rating={92} />
                <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={90}/>
                <CourseStaff name={"Sadiq"} title={"Teaching Assistant"} rating={90} />
                <CourseStaff name={"Ale"} title={"Teaching Assistant"} rating={90} />
            </div>
        </div>
    )
}