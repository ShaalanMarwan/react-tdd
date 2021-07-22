import { Login } from "@/presentation/pages"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import '@/presentation/styles/global.scss'



const Router :React.FC= () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Login}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Router
