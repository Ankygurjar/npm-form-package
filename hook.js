

let objOfFormData = {
    inputName: [],
    idName: new Map()
}

export const getData = ( form ) => { //Main Function

    let data = [];
    if ( !form ) return false;
    for( let i = 0; i < form.elements.length; i++ ){
        if( form[i].name !== '' || form[i].id !== ''){
            form[i].name && objOfFormData.inputName.push(form[i].name)
            form[i].id && objOfFormData.idName.set(
                form[i].id, {
                    required: form[i].required,
                    maxLength: form[i].maxLength,
                    minLength: form[i].minLength
                }
            )
        }
    }
    for(let [key] of objOfFormData.idName){
        let elementData = document.getElementById(key).value
        data.push({
            id:key,
            data: elementData
        })
    }
    return data;
}

export const getErrors = () => {
    let objOfErrors = new Map()
    for( let key of objOfFormData.idName ){
        checkErrors( key[0], objOfErrors )
    }
    return objOfErrors;
}

const checkErrors = ( id, objOfErrors ) => {
    let data = document.getElementById( id ).value
    if( data === ''){
        objOfErrors.set(
            id, {
                errorFieldId: id,
                error: true,
                errorType: new Error("Empty Field")
            }
        )
    }
}




