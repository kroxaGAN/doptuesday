
export const dataState:DataStateType={
    pages:[
        {
            heading: "Цикл while",
            about: "Цикл while имеет след синтаксис"
        },
        {
            heading: "Цикл for",
            about: "Цикл  for имеет след синтаксис"
        },
        {
            heading: "Цикл switch",
            about: "Цикл switch имеет след синтаксис"
        },
    ]
}
export type DataStateType={
    pages:PagesType[]
}
type PagesType={
    heading:string,
    about:string
}
