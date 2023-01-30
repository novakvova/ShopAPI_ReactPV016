import { IStepOneProps } from "../types";

const StepOnePage : React.FC<IStepOneProps> = ({
    onStepNext
}) => {
    const onNext = () => {
        console.log("One step result");
        onStepNext({
            firstName: "Юхим",
            lastName: "Шлунок"
        });
    }
    return (
        <>
            <h1>Реєстрація етап 1</h1>
            <button onClick={onNext}>Далі</button>
        </>
    );
} 
export default StepOnePage;