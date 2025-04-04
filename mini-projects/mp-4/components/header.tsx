"use client"

{/*  bg-red-800 bg-blue-800 bg-yellow-800 bg-green-800 bg-purple-800 bg-orange-800  */}

export default function Header({color}:{color:string}) {

    return (
      <header>
        <h2 className={`text-4xl font-semibold p-4 text-white w-screen bg-${color}-800 mb-5`}>
            Harvard Art Gallery by Colour</h2>
      </header>
    );
}