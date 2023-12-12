import { queryByText, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { ContextTestProvider, AuthContextTest } from '../context/context';
 



describe('Context Component', () => {
  it('should be able to add a todo on the state', async () => {
    const fakerTodo = 'todo-1'

    render(
      <ContextTestProvider>
        <AuthContextTest.Consumer>
          {({ addTodo, todos }) => (
           <div>
             <button data-testid="add_button" onClick={() => addTodo(fakerTodo)}>Adicionar tarefa</button>
             {todos.map((todo) => {
              return (
                <div key={todo}>
                  <p data-testid="faker_todo" >{todo}</p>
                </div>
              )
             })}
           </div>
          )}
        </AuthContextTest.Consumer>
      </ContextTestProvider>
    )
    const buttonElement = screen.getByTestId('add_button')
    await userEvent.click(buttonElement)
    
 
    expect(screen.getByText('todo-1')).toBeInTheDocument()
    expect(screen.getByTestId('faker_todo')).toHaveTextContent(fakerTodo)
  }) 

  it('should be able to remove a todo on the state', async () => { // REVER
    const initialTodos = ['todo-1', 'todo-2', 'todo-3']

    render(
      <ContextTestProvider initialTodos={initialTodos}>
        <AuthContextTest.Consumer>
        {({ removeTodo, todos }) => (
           todos.map((todo) => {
            return (
              <div key={todo}>
                <p>{todo}</p>
                <button data-testid="delete_button" onClick={() => removeTodo(todo)}>Remover</button>
              </div>
            )
           })
          )}
        </AuthContextTest.Consumer>
      </ContextTestProvider>
    ) 
    const removeButton = screen.getAllByTestId('delete_button')
    userEvent.click(removeButton[0])

    await waitForElementToBeRemoved(() => screen.getByText('todo-1'))
  })
})
