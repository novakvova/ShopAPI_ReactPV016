import { IStepTwoProps } from "../types";

const StepTwoPage : React.FC<IStepTwoProps> = ({
    onStepNext
}) => {
    const onNext = () => {
        console.log("Two step result");
        onStepNext({
            age: 36,
            email: "vlad@gmail.com",
            phone: "+38098 898 73 98"
        });
    }
    return (
        <>
            <h1>Реєстрація етап 2</h1>
            <button onClick={onNext}>Далі</button>
        </>
    );
} 
export default StepTwoPage;