import './App.css'
import Inputs from '../Inputs/Inputs'
import Apresentacao from '../Apresentacao/Apresentacao'

const App = () =>{
    return(
        <>
        <section>
        <div className='container'>
            <Apresentacao
            titulo="Learn to code by watching others"
            paragrafo="See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how developers think is invaluable."/>
        </div>
        <div>
          
        </div>
           <Inputs
           formText1="First Name"
           formText2="Last Name"
           formText3="Email Address"
           formPassword="Password"
           p="By clicking the button, you are agreeing to our Terms and Services."
           />
           </section>
        </>
    )
}

export default App