import { TInputAttr } from "../../../types/types"

/**
 * Inputs------------------------------------
 */
export const inputTextAttr = (name: string, id?: string, placeH?: string): TInputAttr => {
    return {
        type: "text",
        name: name,
        id: id,
        placeholder: placeH
    }
}

export const inputNumbAttr = (name: string, id?: string, maxL?: number): TInputAttr => {
    return {
        type: "number",
        name: name,
        id: id,
        maxLength: maxL
    }
}

export const inputPassAttr = (name: string, id?: string, auComp?: string): TInputAttr => {
    return {
        type: "password",
        name: name,
        id: id,
        autoComplete: auComp
    }
}

