import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput 
                id="task" 
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register("task")}
            />

            <label htmlFor="">durante</label>

            <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00" 
                step={1}
                min={0}
                max={60}
                disabled={!!activeCycle}
                {...register("minutesAmount", { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    );
}