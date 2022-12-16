import { Navigate } from "react-router-dom";
import {DataStateType} from "../dataState/dataState";

type PropsType = {
    page: DataStateType
    route:number
}

export const Content = (props: PropsType) => {
    return (
        props.route<props.page.pages.length
        ?
        <div>
            <h2>
                {props.page.pages[props.route].heading}
            </h2>
            <div>
                {props.page.pages[props.route].about}
            </div>
        </div>
            : <Navigate to={'/error'}/>

    )
}
