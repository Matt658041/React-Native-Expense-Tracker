import { View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'

export default function RecentExpenses() {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 days"/>
    </View>
  )
}