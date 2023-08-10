export interface inputType{
    type: string | number;
    placeholder?:string,
    label: string;
    value: string | number;
    validation?:{
        required?:{
          state:boolean|'true'|'false',
          message?:string
        }, 
        minLength?:{
          state:number|string,
          message?:string
        }, 
        maxLength?:{
          state:number|string,
          message?:string
        }, 
        pattern?:{
          state:string,
          message?:string
        }, 
      }
}