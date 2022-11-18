import { View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'

export default function AllExpenses() {
  return (
    <View>
     <ExpensesOutput expensesPeriod="Total"/>
    </View>
  )
}