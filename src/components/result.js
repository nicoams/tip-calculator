import { useContext } from 'react';
import { CalculationContext } from '../context/context';

import '../css/result.scss';

export default function Results() {
  const { variables, functions } = useContext(CalculationContext);

  const tip = (variables.bill * variables.tipPercentage) / 100;
  const tipPerPerson =
    variables.numberOfPeople === '0' ? '0.00' : tip / variables.numberOfPeople;
  const total = variables.bill / variables.numberOfPeople + tipPerPerson;

  const tipPerPersonLocale = tipPerPerson.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
  const totalLocale = total.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  console.log('bill', variables.bill);
  console.log('tipPercentage', variables.tipPercentage);
  console.log('tip', tip);
  console.log('numberOfPeople', variables.numberOfPeople);
  console.log('tipPerPerson', tipPerPerson);
  console.log('total', total);

  let formStatus;
  if (!isNaN(total) && total !== '0') {
    formStatus = 'completed';
  } else {
    formStatus = '';
  }

  return (
    <section className="results">
      <div className="amounts">
        <div className="tip-amount">
          <label>
            Tip Amount <br></br>
            <span>/ person</span>
          </label>
          <p id="tip-amount">{`$${
            isNaN(tipPerPerson) || tipPerPerson === Infinity
              ? '0.00'
              : tipPerPersonLocale
          }`}</p>
        </div>
        <div className="total-amount">
          <label>
            Total<br></br>
            <span>/ person</span>
          </label>
          <p id="total">{`$${
            isNaN(total) || tipPerPerson === Infinity ? '0.00' : totalLocale
          }`}</p>
        </div>
      </div>
      <div className="reset-btn">
        <button
          className={formStatus}
          onClick={functions.reset}
        >
          RESET
        </button>
      </div>
    </section>
  );
}
