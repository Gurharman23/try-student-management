import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { updateStudentThunk } from '../redux/slices/studentsSlice';
import { Id, UpdateStudent } from '../types';
import { UnknownAction } from '@reduxjs/toolkit';

const EditableField = ({id, fieldName, value}: {id: Id, fieldName: string, value: string}) => {
  const [editing, setEditing] = useState(false);
  const [currentValue, setValue] = useState(value);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    (dispatch(updateStudentThunk({ id, [fieldName]: ref.current?.value }) as unknown as UnknownAction) as unknown as Promise<UpdateStudent>).then(() =>{
        setEditing(false);
    }) 
  }
  return (
    <div className="min-font-height">
        {!editing && <span>{value}</span>}
        { (!editing) && <button onClick={e => setEditing(!editing)}>{!value ? 'add': 'edit'}</button>}
        {editing && <input type='text' name={fieldName} value={currentValue ?? ''} onChange={e => setValue(e.target.value)} ref={ref}></input>}
        { (editing) && <button onClick={handleClick}>Done</button>}

    </div>

  )
}

EditableField.propTypes = {
fieldName: PropTypes.string,
value: PropTypes.string,
}

export default EditableField
