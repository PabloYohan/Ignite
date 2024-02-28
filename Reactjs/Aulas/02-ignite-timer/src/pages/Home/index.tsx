import { HandPalm, Play } from 'phosphor-react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import * as zod from 'zod'
import {
  CountdownStartButton,
  CountdownStopButton,
  HomeContainer,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleCreateSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleCreateSchema>

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm({
    resolver: zodResolver(newCycleCreateSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, reset, watch } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <CountdownStopButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </CountdownStopButton>
        ) : (
          <CountdownStartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </CountdownStartButton>
        )}
      </form>
    </HomeContainer>
  )
}
