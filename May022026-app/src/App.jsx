
import './App.css'
import Card from './Card'
function App() {
  const carditems = [
    {header:"Chapter 1", title:"Objective", description:"Objective of the study", buttontext:"View Scope and Delimitation", hastitle:true},
    {header:"Chapter 2", title:"Review of Related Literature", description:"Related System", buttontext:"Show More", hastitle:true},
    {header:"Chapter 3", title:"Methodology", description:"Method of Development", buttontext:"See Charts", hastitle:true}
  ]

  return(
    <>
    <h1>Hello</h1>
   
     {carditems.map(item=>(
      <Card header={item.header}
        title={item.title}
        description={item.description}
        buttontext={item.buttontext}
        hastitle = {item.hastitle}
>
      </Card>
    )
  )
}

    </>
  )
}
export default App
