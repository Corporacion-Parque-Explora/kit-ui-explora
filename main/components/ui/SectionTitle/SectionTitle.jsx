import React from 'react'

export const SectionTitle = ({ title, isRed, isYellow, isGreen, isBlue, whiteTitle, blackTitle }) => (
    <div className='section'>
        <h2 className={`sectionTitle ${whiteTitle ? 'white-title' : blackTitle ? 'black-title' : '#000'}`}>{title}</h2>
        <hr className={`${isRed ? 'is-red' : isBlue ? 'is-blue' : isGreen ? 'is-green' : isYellow ? 'is-yellow' : ''}`} />
    </div>
)
