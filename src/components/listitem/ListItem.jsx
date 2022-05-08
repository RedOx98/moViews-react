import "./listitem.scss";
import{ Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&pr"

  return (
    <div className="listItem" 
    style={{left: isHovered  && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=> setIsHovered(false)}>
      <img src="https://th.bing.com/th/id/R.1d8cc0a3a7a5e851622c61d4da8111f2?rik=3rh7E8eRRlK0dw&pid=ImgRaw&r=0" alt=""/>
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop/>

      
      
      <div className="itemInfo">
        <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpOutlined className="icon"/>
        <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hr 14 mins</span>
          <span className="limit">18+</span>
          <span>2022</span>
        </div>
        <div className="desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
    
  );
}
