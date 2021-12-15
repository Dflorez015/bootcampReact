import { columnCommon, loginAreas, rowCommon, rowCommonForm, sendButton } from '../../const/elemets'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as SCC from "../style/styleCommon"
import { IRegister } from './inputs/interface'
import { inputTextAttr, inputNumbAttr, inputPassAttr } from './inputs/inputs'
import { required, minLength, maxLength, pattern } from './inputs/errInputs'
import { expMail, expCell, expTell } from "./inputs/expressions"
import { addRegData } from '../../context/form/formFunction'
import { useDispatch } from 'react-redux'

export default function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IRegister>()
    const dispatch = useDispatch()

    const resetForm = (data: IRegister) => { reset(data) }
    const onSubmit: SubmitHandler<IRegister> = data => dispatch(addRegData(data, resetForm));

    return (
        <SCC.StyleCard> {/* card form */}
            <SCC.StyleFlex theme={columnCommon}>
                <SCC.StyleH1>Registro</SCC.StyleH1>
                <SCC.StyleForm theme={loginAreas} onSubmit={handleSubmit(onSubmit)}>

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "name" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "10%", iwidth: "90%" }}>
                            <label htmlFor="name">Name:</label>
                            <SCC.StyleInput
                                {...inputTextAttr("name", "name", "Name")} // attributos básicos
                                {...register("name", { required })}
                            />
                        </SCC.StyleFlexFormRow>
                        {errors.name //error
                            && <SCC.StyleErrSpan>{errors.name.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn> {/* first name */}

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "lname" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "15%", iwidth: "85%" }}>
                            <label htmlFor="lname">Last name:</label>
                            <SCC.StyleInput
                                {...inputTextAttr("lname", "lname", "Last name")} // attributos básicos
                                {...register("lname", { required })}
                            />
                        </SCC.StyleFlexFormRow>
                        {errors.lname //error
                            && <SCC.StyleErrSpan>{errors.lname.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn>{/* last name */}

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "cel" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "30%", iwidth: "70%" }}>
                            <label htmlFor="cel">Cellphone:</label>
                            <SCC.StyleInput
                                {...inputNumbAttr("cel", "cel", 11)} // attributos básicos
                                {...register("cel", {
                                    required, pattern: pattern(expCell),
                                    minLength: minLength(10),
                                    maxLength: maxLength(10)
                                })}
                            />
                        </SCC.StyleFlexFormRow>
                        {errors.cel //error
                            && <SCC.StyleErrSpan>{errors.cel.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn> {/* cel */}

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "tel" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "30%", iwidth: "70%" }}>
                            <label htmlFor="tel">Telephone:</label>
                            <SCC.StyleInput
                                {...inputNumbAttr("tel", "tel", 7)} // attributos básicos
                                {...register("tel", {
                                    required,
                                    pattern: pattern(expTell),
                                    minLength: minLength(7),
                                    maxLength: maxLength(7)
                                })}
                            />
                        </SCC.StyleFlexFormRow> {/* tel */}
                        {errors.tel //error
                            && <SCC.StyleErrSpan>{errors.tel.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn>

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "email" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "10%", iwidth: "90%" }}>
                            <label htmlFor="email">Email:</label>
                            <SCC.StyleInput
                                {...inputTextAttr("email", "email", "ejemplo@ejem.com")} // attributos básicos
                                {...register("email", { required, pattern: pattern(expMail) })}
                            />
                        </SCC.StyleFlexFormRow>
                        {errors.email //error
                            && <SCC.StyleErrSpan>{errors.email.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn> {/* Mail */}

                    <SCC.StyleFlexFormColumn theme={{ ...columnCommon, area: "pass" }}>
                        <SCC.StyleFlexFormRow
                            theme={{ ...rowCommonForm, lwidth: "10%", iwidth: "90%" }}>
                            <label htmlFor="password">Password:</label>
                            <SCC.StyleInput
                                {...inputPassAttr("password", "password", "off")} // attributos básicos
                                {...register("password", { required, minLength: minLength(6) })}
                            />
                        </SCC.StyleFlexFormRow>
                        {errors.password //error
                            && <SCC.StyleErrSpan>{errors.password.message}</SCC.StyleErrSpan>}
                    </SCC.StyleFlexFormColumn>  {/* first name */}

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommon, area: "subm" }}>
                        <SCC.StyleButton theme={sendButton} type='submit'><h3>Enviar</h3></SCC.StyleButton>
                    </SCC.StyleFlexFormRow> {/*BTN submit */}

                </SCC.StyleForm> {/* form */}
            </SCC.StyleFlex> {/* column flex */}
        </SCC.StyleCard>
    )
}
