import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good.length === 0 ? (
          'No goods selected'
        ) : (
          <>
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(elem => {
            return (
              <tr
                data-cy="Good"
                className={elem === good ? 'has-background-success-light' : ''}
              >
                <td>
                  {elem === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setGood(elem)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {elem}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
