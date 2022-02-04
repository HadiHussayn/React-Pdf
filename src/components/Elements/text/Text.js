import "./style.css"
function Text({variant, text, ...props}){
   switch(variant){
       case "h2":
           return <h2 className="h2" {...props}> {text}</h2>
        case "h3":
            return <h3 className="h3" {...props}> {text}</h3>
        case "para1":
            return <p className="para1" {...props}> {text}</p>
        case "para2":
            return <p className="para2" {...props}> {text}</p>
        default:
            return <h6 className="h6 "{...props}> {text}</h6>
       
   }
  
}
export default Text