import Button from "../Button/Button"
import './Input.css'



const Inputs = ({formText1, formText2, formText3, formPassword, p})=>{
    return(
        <>
        <div className="container2">
        <input type="text" value={formText1}/>
        <input type="text" value={formText2}/>
        <input type="text" value={formText3}/>
        <input type="password" value={formPassword}/>
        <Button
        text="CLAIM YOUR FREE TRIAL"/>
        <p>{p}</p>
        </div>
        </>
    )
}

export default Inputs