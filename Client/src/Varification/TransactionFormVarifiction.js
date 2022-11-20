export const validateFormTransaction=(StatusInput)=>{
    
    if(!isNaN(StatusInput.vendor)){
        const e = new Error("the vendor is number");
        return e;
    }

}
    