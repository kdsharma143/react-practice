import ChildCmp from "./childCmp"

const ParentCmp =()=>{
    const parntFunc =(id)=>{
        alert(id);
    }
    return(
        <ChildCmp parent={parntFunc}/>
    )
}

export default ParentCmp;