import React, { useState } from "react";
import { list } from "./list";
import Checkbox from "./components/Checkbox";

function App() {

  const [listItems, setListItems] = useState(
    list.map((item) => ({ ...item, checked: false }))
  );

  // console.log("listItems", listItems);

  // internal handleSelect checking
  const handleSelect = (item, checked) => {
    const updatedList = listItems.map((el) => el.id === item.id ? { ...el, checked: checked } : el);
    setListItems(updatedList);
  }

  // set value from Checkbox onChange function call
  const handleAllSelect = (checkedValue) => {
    const updatedList = listItems.map((item) => ({ ...item, checked: checkedValue }));
    setListItems(updatedList);
  }

  // Array of all false -> if one unchecked -> Select All is also unchecked
  const allSelected = listItems.filter((item) => item.checked !== true).length < 1 ? true : false;

  return (
    <div className="h-screen p-4 background-gradient bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center">
      <div className="flex flex-col rounded-xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden">
        <Checkbox
          label="Select All"
          checked={allSelected}
          onChange={handleAllSelect}
          className="px-4 py-4 bg-gray-200 w-full"
        />
        <div className="py-4 px-4 flex flex-col w-full bg-slate-100 rounded-b-xl">
          {
            listItems.map((item) => (
              <Checkbox
                key={item.id}
                label={item.name}
                checked={item.checked}
                onChange={(checked) => handleSelect(item, checked)}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
