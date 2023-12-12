import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Info from '../app/components/Info';
import { faker } from '@faker-js/faker';

type UserMockProps = {
  id: string
  name: string
  login: string
  location: string
}

describe('Info Component', () => {
  it('should render user information', async () => {

    const userMockData: UserMockProps = { // Mock Data, format is object, but if was more complex I could create a JSON.
      id: faker.string.uuid(),
      name: faker.internet.displayName(),
      login: faker.internet.userName(),
      location: faker.location.city(),
    }
    
    render(<Info user={userMockData}  />)

    const buttonElement = screen.getByTestId('button_show')

    await userEvent.click(buttonElement) // Simulando o click.

    // Esperando achar um data-testid que tenha tal texto correspondente.
    expect(await screen.findByTestId('user_id')).toHaveTextContent(userMockData.id) 
    expect(await screen.findByTestId('user_name')).toHaveTextContent(userMockData.name)
    expect(await screen.findByTestId('user_location')).toHaveTextContent(userMockData.location)
    expect(await screen.findByTestId('user_login')).toHaveTextContent(userMockData.login)
  })
})
