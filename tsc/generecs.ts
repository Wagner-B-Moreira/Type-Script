// generecs 
const returnValue = <t>(valor: t) => valor 

const message = returnValue<string>("Hello World") 

const count = returnValue<number>(5)


