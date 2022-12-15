import React from 'react';

export const ParagraphInput = ({ pRef }) => {
    return (
        <>
            Enter paragraph here
            <div id="paragraph-input"
                contentEditable
                
                dangerouslySetInnerHTML={{ __html: pRef.current ? pRef.current.innerHTML : 'Enter Text Here' }}
                ref={pRef}
            >
            </div>
        </>
    )
}