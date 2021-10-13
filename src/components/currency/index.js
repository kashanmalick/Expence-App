import { React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './css/style.css'
import BalanceSheet from '../balnceSheet'
import RowAndColumnSpacing from '../convertBox'
import Button from '@mui/material/Button';
import ColorTextFields from '../textfield'
import TodoBox from '../todoBox'

const currencies = [
  {
    value: 'USD',
    label: 'USD',
    sign: '$: ',
  },
  // {
  //   value: 'EUR',
  //   label: 'EUR',
  // },
  // {
  //   value: 'BTC',
  //   label: 'BTC',
  // },
  // {
  //   value: 'JPY',
  //   label: 'JPY',
  // },
  {
    value: 'PKR',
    label: 'PKR',
    sign: 'Rs: ',
  },
];



export default function SelectTextFields() {
  const [currency, setCurrency] = useState('PKR');
  const [amount, setAmount] = useState();
  const [inpValue, setValue] = useState('');
  const [inpAmount, setInpAmount] = useState([]);
  const [todoItem, setTodoItem] = useState([]);


  let addTodo = () => {
    let arr2 = [...inpAmount]
    let arr = [...todoItem];
    let amt = parseInt(amount)
    arr.push(inpValue);
    arr2.push(amt)
    setTodoItem(arr)
    setInpAmount(arr2)
  }

  const deleteTodo = (i) => {
    let arr = [...todoItem]
    arr.splice(i, 1)
    setTodoItem(arr)
  }


  let simbol;
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };


  function getSimbol() {
    currencies.map((v) => {
      if (v.value === currency) {
        simbol = v.sign
      }
    })

  }
  getSimbol()

    var sum = inpAmount.reduce(function(a, b){
        return a + b;
    }, 0);

  function getNegativeNumbers(inpAmount) {
  return inpAmount.filter(function(value) {
    return value < 0;
  });
  }
  let minusValue = getNegativeNumbers(inpAmount)
  var minusSum = minusValue.reduce(function(a, b){
    return a + b;
  }, 0);

  function getposativeNumbers(inpAmount) {
    return inpAmount.filter(function(value) {
      return value > 0;
    });
    }
    let posativeValue = getposativeNumbers(inpAmount)
    var posativeSum = posativeValue.reduce(function(a, b){
      return a + b;
    }, 0);
  
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className="textCentre"
            id="outlined-select-currency"
            select
            label="Select"
            color="secondary"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
            }
          </TextField>
        </div>
      </Box>
      <BalanceSheet sign={simbol} curr={sum} />
      <RowAndColumnSpacing sign={simbol} posativeValue={posativeSum} minusValue = {minusSum} />

      <div>
        <h4 className="colour">TRANSACTION HISTORY</h4>
        <hr /></div>

      <div>
        {todoItem.map((v, i) => {
          return <TodoBox key={i} inpVal={v} sign={simbol} amountVal={inpAmount[i]} onClick={deleteTodo}></TodoBox>
          
        })}
      </div>


      <h4 className="colour">ADD NEW TRANSACTION</h4>
      <div>
        <ColorTextFields title="ITEM" onChange={(e) => setValue(e.target.value)} value={inpValue} ></ColorTextFields>
        <h4 className="colour">(NEGATIVE - EXPENSE, POSITIVE - INCOME)</h4>
      </div>
      <ColorTextFields title="AMOUNT" num="number" onChange={(e) => setAmount(e.target.value)} value={amount} ></ColorTextFields>


      <div>
        <Button fullWidth onClick={addTodo} variant="contained"><strong>ADD TRANSACTION</strong></Button>
      </div>
    </div >
  );
}




