import { useState } from "react";
import CropperDialog from "../../common/CropperDialog";
import StepOnePage from "./step_one";
import StepTwoPage from "./step_two";
import { IRegisterModel, IStepOneResult, IStepTwoResult, StepEnum } from "./types";

const RegisterPage : React.FC = () => {

    const [step, setStep] = useState<StepEnum>(StepEnum.STEP_ONE);
    const [model, setModel] = useState<IRegisterModel>()

    const hadleStepOneResult = (resuslt: IStepOneResult) => {
        console.log("-----Step one result-----", resuslt);
        setStep(StepEnum.STEP_TWO);
    }

    const hadleStepTwoResult = (result: IStepTwoResult) => {
        console.log("-----Step two result-----", result);
    }

    const data = ( 
        <>
            {step===StepEnum.STEP_ONE && <StepOnePage onStepNext={hadleStepOneResult}/>}
            {step===StepEnum.STEP_TWO && <StepTwoPage onStepNext={hadleStepTwoResult}/>}
            
        </>
    );

    return (
        <>
            <h1>Реєстрація</h1>
            <CropperDialog imageView="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIYs4JP30mlSO5lK-NGbhAIGPbSB44uW_jg&usqp=CAU"/>
            {/* {data} */}
        </>
    );
}

export default RegisterPage;