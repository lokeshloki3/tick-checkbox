import React from "react";

const Checkbox = ({ label, checked, onChange, className }) => {

    const handleChange = (e) => {
        // Calling handleAllSelect only -> handleSelect has its own internal checking in App
        onChange(e.target.checked);
    }

    return (
        <label className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <span>{label}</span>
        </label>
    )
}

export default Checkbox;