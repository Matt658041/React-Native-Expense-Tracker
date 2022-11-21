import { View } from 'react-native'

import React, {useContext } from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View>
      <ExpensesOutput expenses={expensesCtx.expenses } expensesPeriod="Total"/>
    </View>
  )
}