import { useState } from "react";
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
            {data}
        </>
    );
}

export default RegisterPage;