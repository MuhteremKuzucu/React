export const ekle=(inputData)=>({type:"EKLE", payload:inputData });

export const sil=(gorev)=>({
    type:"SIL", payload:gorev

})


export const degistir=(id)=>({
    type:"CHANGE", payload:id

})