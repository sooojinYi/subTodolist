import {useState} from 'react';
import { MdReply } from "react-icons/md";
import './TodoInsert.scss'
export default function TodoInsert({onInsert}){
    const [value, setValue] = useState('');
    function onChange(e){
        setValue(e.target.value);
    }function onSubmit(e){
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input type="text" placeholder="할일을 입력하세요" onChange={onChange} value={value}></input>
            <button type="submit"><MdReply/></button>
        </form>
    );
}