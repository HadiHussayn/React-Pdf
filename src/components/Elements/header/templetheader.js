import Text from "../text/Text"
import "./style.css"
function TempletHeader(){
    return(
        <>
        <div className="header-root">
        <Text text="Bystronic Group" variant="para2" />
        <div className="header-logo">
            <Text text="Bystronic" variant="h3" className="text-white"></Text>
        </div>
        </div>
        </>
    )
}
export default TempletHeader