type CourseStaffProps = {
    name: string;
    rating: number;
    title: string;
}

export function CourseStaff({name, rating, title} : CourseStaffProps) {
    // const name = "Jeffrey";
    // const  rating = 100;
    // const title = "Teaching Assistant";
    return (
        <div style={{backgroundColor: "blue"}}>
            <h3>Name : {name}</h3>
            <p>Rating : {rating}</p>
            <p>Title : {title}</p>
        </div>
    );
}