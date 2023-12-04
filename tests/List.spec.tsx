import { render , waitForElementToBeRemoved, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import List from '../app/components/List'

// FIND... = ESPERA APARECER EM TELA. (BOM PARA PROMISES)
// GET... = TEM QUE TER EM TELA, SE NÃO DA ERRO.
// QUERY... = TANDO NA TELA OU NÃO, RETORNA TRUE.

// Esse describe a gente coloca qual componente estamos fazendo o teste.
describe('List Component', () => {
  it('should render items', () => {
    render(<List />)
  
    // Os expecect abaixo eu espero que tenha um text por exemplo ('Miguel') no documento HTML.
    // Se tiver vai retornar true, se não vai retornar false.
    expect(screen.getByText('Miguel')).toBeInTheDocument()
    expect(screen.getByText('Matheus')).toBeInTheDocument()
    expect(screen.getByText('Marcelo')).toBeInTheDocument()
    expect(screen.getByText('Marcelle')).toBeInTheDocument() 
  })
  
  
  it('should be able to add new item to the list', async () => {
    render(<List />)
    
    const inputElement = screen.getByPlaceholderText('Novo User') // Procurando o input que tenha tal placeholder.
    const buttonElement = screen.getByText('Adicionar') // Procurando o button que tenha tal texto.
    
    await userEvent.type(inputElement, 'Maria') // Coloquei no primeiro parâmetro o input e no segundo o que vai ser escrito.
    await userEvent.click(buttonElement) // Simulando o click.
    
    expect(screen.getByText('Maria')).toBeInTheDocument() // esperando que tenha um texto ('Maria') no documento HTML.
  })
    
  
  it('should be able to remove item to the list', async () => {
    render(<List />)
    // getAllByText = pega todos os items que tem um texto especifico e me retornar no format de vetor.
  
    const removeButton = screen.getAllByText('Remover') // procurando os botões que estão em um map.

    userEvent.click(removeButton[0]) // clicando no primeiro no primeiro button do primeiro user.

    await waitForElementToBeRemoved(() => screen.getByText('Miguel')) // O método espera um elemento DOM para deletar.
  }) 
})


// OBSERVAÇÕES SOBRE TESTES !!!

// Cada teste deve testar apenas uma funcionalidade.
// Evite pegar os componentes pelo texto, deixa seu teste sensível demais, o que pode resultar em falhas desnecessárias. 
// A DICA É A SEGUINTE: Use o data-testId.
