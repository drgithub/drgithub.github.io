import {List} from "immutable";

export type Locale = {
    code    : string,
    name    : string,
    active  : boolean
}
export const Languages: List<Locale> = List([
{  code: "ceb", name : "Cebuano",   active: true  },
{  code: "tl",  name : "Tagalog",   active: true  },
{  code: "en",  name : "English",   active: true  },
{  code: "es",  name : "Spanish",   active: true  },
{  code: "de",  name : "German",    active: true  }, 
])
export var current: Locale, msg: Messages;
export const initLocale:(param?: string)=>void = (param) => {
    const alocale: Locale | undefined = Languages.find((value: Locale) => value.active);
    const locale: Locale = Languages.filter((value: Locale) => value.code === param).first() || alocale;
    current = Object.assign({},locale);
    msg     = Object.assign({},require('./'+ locale.code +'/').get);
}
// STATIC TEXTS/STRINGS/MESSAGES SHOULD BE DECLARED HERE AND IMPLEMENTED ON ./[code]/index.tsx
export type Messages = {
    home: string;
    back: string;
    ok: string;
    cancel: string;
    [key: string]: string;
}