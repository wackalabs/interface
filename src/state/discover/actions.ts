import { createAction } from '@reduxjs/toolkit'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export const selectCurrency = createAction<{ field: Field; currencyId: string }>('discover/selectCurrency')
export const switchCurrencies = createAction<void>('discover/switchCurrencies')
export const typeInput = createAction<{ field: Field; typedValue: string }>('discover/typeInput')
export const replaceDiscoverState = createAction<{
  field: Field
  typedValue: string
  inputCurrencyId?: string
  outputCurrencyId?: string
  recipient: string | null
}>('discover/replaceDiscoverState')
export const setRecipient = createAction<{ recipient: string | null }>('discover/setRecipient')
