import { useContext } from 'react';
import { CalculationContext } from '../context/context';

import '../css/form.scss';

function Form() {
  const { variables, functions } = useContext(CalculationContext);

  return (
    <section className="inputs">
      <div className="bill">
        <div className="label-wrapper">
          <label>Bill</label>
        </div>

        <div className="input-holder">
          <input
            type="number"
            placeholder="0"
            id="bill"
            name="bill"
            value={variables.bill || ''}
            onChange={functions.handleChange}
            onKeyDown={functions.handleNonDigits}
            min="0"
          />
        </div>
      </div>
      <div className="select-tip">
        <label>Select Tip %</label>
        <div
          className="tip-options"
          onChange={functions.handleChange}
        >
          <input
            type="radio"
            name="tipPercentage"
            id="5"
            value={5}
            checked={variables.selectedOption === '5'}
            onChange={functions.handleOptionChange}
          />
          <label
            htmlFor="5"
            tabIndex={0}
            name="tipPercentage"
            onKeyDown={(e) => functions.handleKeyDown(e, '5')}
          >
            5%
          </label>

          <input
            type="radio"
            name="tipPercentage"
            id="10"
            value={10}
            checked={variables.selectedOption === '10'}
            onChange={functions.handleOptionChange}
          />
          <label
            htmlFor="10"
            tabIndex={0}
            onKeyDown={(e) => functions.handleKeyDown(e, '10')}
          >
            10%
          </label>

          <input
            type="radio"
            name="tipPercentage"
            id="15"
            value={15}
            checked={variables.selectedOption === '15'}
            onChange={functions.handleOptionChange}
          />
          <label
            htmlFor="15"
            tabIndex={0}
            onKeyDown={(e) => functions.handleKeyDown(e, '15')}
          >
            15%
          </label>

          <input
            type="radio"
            name="tipPercentage"
            id="25"
            value={25}
            checked={variables.selectedOption === '25'}
            onChange={functions.handleOptionChange}
          />
          <label
            htmlFor="25"
            tabIndex={0}
            onKeyDown={(e) => functions.handleKeyDown(e, '25')}
          >
            25%
          </label>

          <input
            type="radio"
            name="tipPercentage"
            id="50"
            value={50}
            checked={variables.selectedOption === '50'}
            onChange={functions.handleOptionChange}
          />
          <label
            htmlFor="50"
            tabIndex={0}
            onKeyDown={(e) => functions.handleKeyDown(e, '50')}
          >
            50%
          </label>

          <input
            type="number"
            id="custom"
            name="tipPercentage"
            placeholder="Custom"
            onClick={functions.handleInputNumberChange}
            onKeyDown={functions.handleNonDigits}
          />
        </div>
      </div>
      <div className="number-people">
        <div className="label-wrapper">
          <label>Number of People</label>
          {variables.hasError && (
            <label className={variables.hasError}>{variables.error}</label>
          )}
        </div>

        <div className="input-holder">
          <input
            type="number"
            id={variables.idNop}
            placeholder="0"
            name="numberOfPeople"
            value={variables.numberOfPeople || ''}
            onChange={functions.handleChange}
            onKeyDown={functions.handleNonDigits}
          />
        </div>
      </div>
    </section>
  );
}

export default Form;
