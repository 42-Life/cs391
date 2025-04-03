"use client"

const TestColor = ({color}:{color:string}) => {
    return (
        <div>
            <p>Your colour is {color}</p>
        </div>
    );
}

TestColor.getInitialProps = async({ query } : {query:string}) => {
    return {query}
}

export default TestColor;