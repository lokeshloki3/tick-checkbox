import React, { useState } from "react";
import { list } from "./list";

function App() {

  const [listItems, setListItems] = useState(
    list.map((item) => ({ ...item, checked: false }))
  );

  console.log("listItems", listItems);
  
  return (
    <div className="flex justify-center items-center">
      {
        listItems.map((item)=> (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  )
}

export default App
