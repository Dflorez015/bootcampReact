import { useDispatch, useSelector } from "react-redux"
import { columnCommon, h1Center, resButton, rowCommon, sumButton } from "../../const/elemets"
import { restCont, sumCont } from "../../context/counter/counterFunctions"
import { RootState } from "../../context/store"
import * as SCC from "../style/styleCommon"

export default function Counter() {
    const { count } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()

    const sum = () => {
        dispatch(sumCont(count))
    }
    const rest = () => {
        dispatch(restCont(count))
    }


    return (
        <SCC.StyleCard theme={{ stand: 10 }}>
            <SCC.StyleFlex theme={columnCommon}>
                <SCC.StyleH1 theme={h1Center}>{count}</SCC.StyleH1>
                <SCC.StyleFlex theme={rowCommon}>
                    <SCC.StyleButton type='button' theme={resButton} onClick={() => rest()}>
                        Restar
                    </SCC.StyleButton>{/* restButton */}
                    <SCC.StyleButton type='button' theme={sumButton} onClick={() => sum()}>
                        Sumar
                    </SCC.StyleButton>{/* sumButton */}
                </SCC.StyleFlex>{/* horizontalFlex */}
            </SCC.StyleFlex>{/* verticalFlex */}
        </SCC.StyleCard>
    )
}
