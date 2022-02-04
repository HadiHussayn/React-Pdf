import "./style.css"
import Text from "../text/Text";
function Fotter(){
    var myCurrentDate = new Date();
var date =
  myCurrentDate.getDate()+
  "/" +
  (myCurrentDate.getMonth() + 1) +
  "/" +
  myCurrentDate.getFullYear();
    return(
        <>
        <div className="fotter-root">
            <Text text={date} variant="para1"></Text>
            <Text text="10035858_202111019140448.ram" variant="para1" ></Text>
        </div>
        </>
    )
}
export default Fotter