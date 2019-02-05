import {List} from "immutable";

export type Locale = {
    readonly  code    : string,
    readonly  name    : string,
    readonly  active  : boolean
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
export var current: Locale, msg: Messages, basepath:string;
export const initLocale:(url: string, param?: string)=>void = (url,param) => {
    const alocale: Locale | undefined = Languages.find((value: Locale) => value.active);
    const locale: Locale = Languages.filter((value: Locale) => value.code === param && value.active).first() || alocale;
    const base  = `/${locale.code}`;
    current     = Object.assign({},locale);
    msg         = Object.assign({},require('./'+ locale.code +'/').get);
    basepath    = base === url ? base : '';
}

const getLink:(path: string, parameters?:{}) =>string = (path,parameters) => {
    var scratch:string = path;
    parameters && Object.entries(parameters).forEach((key)=>{
        scratch.replace(`:${key[0]}`, `${key[1]}`);
    });
    var n:number=0;
    return basepath + scratch;
}

export const Paths = {
    home:       (params?:{}) =>   {return getLink('',params)},
    blog:       (params?:{}) =>   {return getLink('/blog',params)},
    about:      (params?:{}) =>   {return getLink('/about',params)},
    contact:    (params?:{}) =>   {return getLink('/contact',params)},
    admin:      (params?:{}) =>   {return getLink('/admin',params)},
}

// STATIC TEXTS/STRINGS/MESSAGES SHOULD BE DECLARED HERE AND IMPLEMENTED ON ./[locale]/index.tsx
export type Messages = {
    readonly  home: string;
    readonly  back: string;
    readonly  ok: string;
    readonly  cancel: string;
}
