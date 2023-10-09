const ChildCmp = (props)=>{
return(
    <div>
        <button onClick={()=>props.parent(6)}>Child Button</button>
    </div>
)
}

export default ChildCmp;