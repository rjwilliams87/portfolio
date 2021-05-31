import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Home', () => {
  test('it renders the expected text', async () => {
    const { render } = await getPage({
      route: '/home',
    });
    render();
    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
