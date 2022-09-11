import { HomePage } from './HomePage'


function AppResolver() {
    return(
        <HomePage/>
    )
}

const App = () => {
    return(
        <AppResolver/>
    )
}


export default App;