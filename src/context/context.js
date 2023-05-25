import { createContext, useState } from 'react';

export const CalculationContext = createContext('');

export const CalculationProvider = ({ children }) => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState('');
  const [idNop, setIdNop] = useState('number-of-people');
  const [selectedOption, setSelectedOption] = useState('');

  const bill = parseFloat(inputs.bill);
  const tipPercentage = parseFloat(inputs.tipPercentage);
  const numberOfPeople = parseFloat(inputs.numberOfPeople);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    validate();
  };

  const validate = () => {
    if (numberOfPeople <= 0) {
      setError("Can't be zero");
      setHasError('error-active');
      setIdNop('number-of-people-error');
    } else {
      setError('');
      setHasError('');
      setIdNop('number-of-people');
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleKeyDown = (e, value) => {
    if (e.key === 'Enter') {
      console.log(e.key);
      e.preventDefault();
      setSelectedOption(value);
      const name = 'tipPercentage';
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleInputNumberChange = () => {
    setSelectedOption('');
  };

  const handleNonDigits = (evt) =>
  ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault();

  const reset = () => {
    const billInput = document.getElementById('bill');
    billInput.value = '';
    const customTip = document.getElementById('custom');
    customTip.value = '';
    const numberOfPeopleInput = document.getElementById('number-of-people');
    numberOfPeopleInput.value = '';
    setInputs({});
    setSelectedOption('');
    setHasError('');
    setIdNop('number-of-people');
  };

  const clearAll = (e) => {
    if (e.key === 'Escape') {
      reset();
    }
  };

  const variables = {
    bill,
    tipPercentage,
    numberOfPeople,
    error,
    hasError,
    idNop,
    selectedOption,
  };

  const functions = {
    handleChange,
    handleOptionChange,
    handleKeyDown,
    handleInputNumberChange,
    handleNonDigits,
    reset,
    clearAll,
  };
  return (
    <CalculationContext.Provider
      value={{
        variables,
        functions,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};
