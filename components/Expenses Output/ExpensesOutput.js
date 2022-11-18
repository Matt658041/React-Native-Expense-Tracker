import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'

export default function ExpensesOutput({expenses}) {
  return (
    <View>
    <ExpensesSummary/>
      <FlatList/>
    </View>
  )
}