import React from 'react'
import { useState } from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { MdAddAlert } from 'react-icons/md';
function Task(props) {
  return (
    <div className='task'>
        <div className='task'>
        <div class="input-group mb-3">
        <div class="input-group-text">
            <input checked={false}
            onClick={() => props.handleDeleteTask(props.id)}
                class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input"/>
        </div>
        <input value={props.text} type="text" class="form-control" aria-label="Text input with checkbox" />
        {/* <input type="text" value={props.date} class="form-control" aria-label="Text input with checkbox" /> */}
        {props.date?(
          <div class="form-control">
            <HiBellAlert  size='1.3em'/>
            &nbsp;
            &nbsp;
            {props.date}
          </div>
        ):(
          <input type="text" value="No Alert!" class="form-control" aria-label="Text input with checkbox" />
        )
        }
        {/* <input value={props.date ? props.data: "no alert"} type="text" class="form-control" aria-label="Text input with checkbox" /> */}
        </div>
    </div>
    </div>
  )
}

export default Task