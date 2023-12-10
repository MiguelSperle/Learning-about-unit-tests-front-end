import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Navigation from '../app/components/navigation';
import { useRouter } from 'next/navigation';

// Jest.mock está simulando o módulo next/navigation
jest.mock('next/navigation', () => { 
  const router = {
    push: jest.fn() // Criando uma função simulada chamada push com o jest.fn().
  }
  
  return {
    useRouter: jest.fn().mockReturnValue(router), 
    // Criando uma outra função simulada chamda useRouter, quando essa função é simulada ela retorna o objeto router
    // Toda vez que a função simulada(userRouter) for chamada, o mockReturnValue vai retornar o objeto router
  }
})

describe('Navigation Component', () => {
  it('should type some on the input and go to another page', async () => {
    render(<Navigation />)

    const inputElement = screen.getByTestId('input_show')
    const buttonElement = screen.getByTestId('button_show')

    await userEvent.type(inputElement, 'something')
    await userEvent.click(buttonElement)

    expect(useRouter().push).toHaveBeenCalledWith('/teste')
    // userRouter() chama a função simulada useRouter, e eu configurei para ela retornar um objeto que possoui o push.
    // espero que a função userRouter().push tenha sido chamada com o argumento especifico ('/teste')
  })

  it('should not go to another page if it does not have anything type on the input ', async () => {
    render(<Navigation />)

    const alertElement = {
      alert: global.alert = jest.fn() 
      // Coloquei dentro de um objeto falando que o global.alert = jest.fn(),
      // Ou seja, tranformei ele numa função simulada
    }

    const buttonElement = screen.getByTestId('button_show')

    await userEvent.click(buttonElement)

    expect(alertElement.alert).toHaveBeenCalledWith('Adicione algo')
    // Esperando que a função global.alert que está sendo simulada e está dentro de um objeto, tenha um argumento especifico ('Adicione algo')
  })
})
