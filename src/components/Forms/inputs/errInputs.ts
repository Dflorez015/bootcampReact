
/**
 * ReactHookForm options--------------------------------
 */
 export const required = {
    value: true,
    message: "Este campo es requerido."
}

export const pattern = (exp: RegExp) => {
    return {
        value: exp,
        message: "El formato no es correcto."
    }
}

export const minLength = (num: number) => {
    return {
        value: num,
        message: `El campo debe tener al menos ${num} carácteres.`
    }
}

export const maxLength = (num: number) => {
    return {
        value: num,
        message: `El campo no debe tener más de ${num} carácteres.`
    }
}
