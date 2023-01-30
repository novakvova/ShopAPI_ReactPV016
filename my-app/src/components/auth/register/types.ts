export enum StepEnum {
    STEP_ONE,
    STEP_TWO
}
export interface IStepOneResult {
    firstName: string,
    lastName: string
}

export interface IStepOneProps {
    onStepNext: (model: IStepOneResult) => void
}

export interface IStepTwoResult {
    email: string,
    phone: string,
    age: number
}

export interface IStepTwoProps {
    onStepNext: (model: IStepTwoResult) => void
}

export interface IRegisterModel {
    stepOn?: IStepOneResult,
    stepTwo?: IStepTwoResult
}