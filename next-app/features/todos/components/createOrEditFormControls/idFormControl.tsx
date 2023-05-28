import React from 'react'

interface IdFormControlProps {
    defaultValue: number
}

function IdFormControl({ defaultValue }: IdFormControlProps) {
    return (
        <input type="hidden" name="id" value={defaultValue} />
    )
}

export default IdFormControl
