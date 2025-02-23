import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownNumber, TaskInput } from "./styles";

export function Home() {
    const { register, handleSubmit, watch } = useForm();

    function handleCreateNewCycle() {

    }

    const task = watch("task");
    const isSubmitDisabled = !task;

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register("task")}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Projeto 4" />
                        <option value="Projeto 5" />
                    </datalist>

                    <label htmlFor="">durante</label>

                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00" 
                        step={5}
                        min={0}
                        max={60}
                        {...register("minutesAmount", { valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormContainer>
            
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownNumber disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownNumber>
            </form>
        </HomeContainer>
    );
}