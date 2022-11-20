export const validateFormTransaction=(StatusInput)=>{
    if(!isNaN(StatusInput.category)){
        const e = new Error("the category is number");
        return e;
    }
    if(!isNaN(StatusInput.vendor)){
        const e = new Error("the vendor is number");
        return e;
    }

}
    