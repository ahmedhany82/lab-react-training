import React from 'react'

export default function Rating(prop) {
    const rating = Math.round(prop.children)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '10px',
            fontSize: '30px',
        }}>
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
    )
}
