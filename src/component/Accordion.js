import React,{useState} from "react";
//import reactDom from "react-dom";
const Accordion = ({ items }) => {
const [activeIndex,seteActiveIndex]=useState(null)
    const onTitleClicked=(index)=>{
        console.log("Title was clicked at",index)
        seteActiveIndex(index)
    }
    //console.log(items)
    const renderedItems = items.map((item,index) => {
        const active=index===activeIndex?'active':'';
        return (
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                onClick={()=>{onTitleClicked(index)}}
                >
                    <i className="dropdown icon"/>
                    {item.title}
                </div>
                <div  className={`content ${active}`}>
                    <p>{item.content }</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
            { /*<h1>{activeIndex}</h1>*/}
        </div>

    );
};
export default Accordion