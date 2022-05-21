import React from 'react'

interface ITodoSortProps {
    sortByName: () => void;
}

export default function TodoSort(props: ITodoSortProps) {

    const handleSortByName = () => {
        props.sortByName()
    }

    return (
        <div className="sort-button-box">
            Sort

            <button className="sort-button"
                onClick={() => {
                    handleSortByName();
                }}>Alphabetically</button>
            <button className="sort-button">Done</button>
            <button className="sort-button">Not Done</button>
        </div>
    )
}
