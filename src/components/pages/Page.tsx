import React from 'react';
import {DataStateType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

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

            <Content
                page={props.dataState}
                route={Number(params.id)}

                // heading={props.dataState.pages[Number(params.id)].heading}
                // content={props.dataState.pages[Number(params.id)].about}
            />
        </div>
    );
};

