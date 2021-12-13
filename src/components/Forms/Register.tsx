import { columnCommon, loginAreas, rowCommon, rowCommonForm, sendButton } from '../../const/elemets'
import * as SCC from "../style/styleCommon"

export default function Register() {
    return (
        <SCC.StyleCard> {/* card form */}
            <SCC.StyleFlex theme={columnCommon}>
                <SCC.StyleH1>Registro</SCC.StyleH1>
                <SCC.StyleForm theme={loginAreas}>

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommonForm, area: "name", lwidth: "10%", iwidth: "90%" }}>
                        <label htmlFor="name">Name:</label>
                        <SCC.StyleInput type="text" id='name' placeholder='Name' />
                    </SCC.StyleFlexFormRow> {/* first name */}

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommonForm, area: "lname", lwidth: "15%", iwidth: "85%" }}>
                        <label htmlFor="name">Last name:</label>
                        <SCC.StyleInput type="text" id='lname' placeholder='Last name' />
                    </SCC.StyleFlexFormRow> {/* last name */}

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommonForm, area: "cel", lwidth: "30%", iwidth: "70%" }}>
                        <label htmlFor="cel">Cellphone:</label>
                        <SCC.StyleInput type="text" id='cel' placeholder='Cellphone' />
                    </SCC.StyleFlexFormRow> {/* cel */}

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommonForm, area: "tel", lwidth: "30%", iwidth: "70%" }}>
                        <label htmlFor="tel">Telephone:</label>
                        <SCC.StyleInput type="text" id='tel' placeholder='Telephone' />
                    </SCC.StyleFlexFormRow> {/* tel */}

                    <SCC.StyleFlexFormRow
                        theme={{ ...rowCommon, area: "subm" }}>
                        <SCC.StyleButton theme={sendButton} type='submit'>Enviar</SCC.StyleButton>
                    </SCC.StyleFlexFormRow>

                </SCC.StyleForm> {/* form */}
            </SCC.StyleFlex> {/* column flex */}
        </SCC.StyleCard>
    )
}
