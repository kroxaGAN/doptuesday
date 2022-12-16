import React from 'react';
import {DataStateType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PropsType={
    dataState:DataStateType
}

export const Page = (props:PropsType) => {
    console.log(props.dataState)
    let params=useParams()
    console.log(params)
    return (

        <div>
            PAGE
            <div>
                {props.dataState.pages[Number(params.id)].heading}
            </div>
            <div>
                {props.dataState.pages[Number(params.id)].about}
            </div>

        </div>
    );
};

