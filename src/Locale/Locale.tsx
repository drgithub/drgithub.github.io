import {List} from "immutable";
import { url } from "inspector";

export type Locale = {
    code    : string,
    name    : string,
    active  : boolean
}
export const Languages: List<Locale> = List([
{  code: "ceb",  name : "Cebuano",   active: true  },
{  code: "tl",   name : "Tagalog",   active: true  },
{  code: "en",   name : "English",   active: true  },
{  code: "es",   name : "Spanish",   active: false  },
{  code: "de",   name : "German",    active: false  },
{  code: "cn",   name : "Chinese",   active: false  }, 
{  code: "jpn",  name : "Japanese",  active: false  }, 
{  code: "kor",  name : "Korean",    active: false  },
])
export var current: Locale, msg: Messages, localeCode:string, basepath:string;
export const initLocale:(url: string, param?: string)=>void = (url,param) => {
    const alocale: Locale | undefined = Languages.find((value: Locale) => value.active);
    const locale: Locale = Languages.filter((value: Locale) => value.code === param && value.active).first() || alocale;
    const base  = `/${locale.code}`;
    localeCode  = locale.code;
    current     = Object.assign({},locale);
    msg         = Object.assign({},require('./'+ locale.code +'/').get);
    basepath    = base === url ? base : '';
}
export const getLink:(path: string, parameters?:{}) =>string = (path,parameters) => {
    parameters && Object.entries(parameters).forEach((key)=>{
        console.log(key);
    });
    return basepath + path;
}
// STATIC TEXTS/STRINGS/MESSAGES SHOULD BE DECLARED HERE AND IMPLEMENTED ON ./[code]/index.tsx
export type Messages = {
    home: string;
    back: string;
    ok: string;
    cancel: string;
    [key: string]: string;
}

export const PathsDB = {
    home: '',
    blog: '/blog',
    about: '/about',
    contact: '/contact',
    admin: '/admin',
}