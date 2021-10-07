import { createAction } from '@reduxjs/toolkit'
import { SupportedLocale } from 'constants/locales'

export interface ImageMetadata {
  src: string // ^ipfs://.+
  mimeType: string
  width: number
  height: number
  size: number
}

export interface ImageSources {
  original: ImageMetadata
  alternatives?: ImageMetadata[]
}

export interface IDXProfile {
  name?: string
  image?: ImageSources
  description?: string // maxLength: 420
  emoji?: string // maxLength: 2
  background?: ImageSources
  birthDate?: string // ISO 8601
  url?: string // maxLength: 240
  gender?: string // maxLength: 42
  homeLocation?: string // maxLength: 140
  residenceCountry?: string // ^[A-Z]{2}$
  nationalities?: string[] // pattern: ^[A-Z]{2}$, min: 1 max: 5 items
  affiliations?: string[] // maxLength: 240
}

export interface SerializedPair {
  token0: SerializedToken
  token1: SerializedToken
}

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export interface SerializedPair {
  token0: SerializedToken
  token1: SerializedToken
}

export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode')
export const updateArbitrumAlphaAcknowledged = createAction<{ arbitrumAlphaAcknowledged: boolean }>(
  'user/updateArbitrumAlphaAcknowledged'
)
export const updateOptimismAlphaAcknowledged = createAction<{ optimismAlphaAcknowledged: boolean }>(
  'user/updateOptimismAlphaAcknowledged'
)
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('user/updateUserExpertMode')
export const updateUserLocale = createAction<{ userLocale: SupportedLocale }>('user/updateUserLocale')
export const updateUserClientSideRouter = createAction<{ userClientSideRouter: boolean }>(
  'user/updateUserClientSideRouter'
)
export const updateHideClosedPositions = createAction<{ userHideClosedPositions: boolean }>('user/hideClosedPositions')
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: number | 'auto' }>(
  'user/updateUserSlippageTolerance'
)
export const updateUserDeadline = createAction<{ userDeadline: number }>('user/updateUserDeadline')
export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>('user/addSerializedToken')
export const removeSerializedToken = createAction<{ chainId: number; address: string }>('user/removeSerializedToken')
export const addSerializedPair = createAction<{ serializedPair: SerializedPair }>('user/addSerializedPair')
export const removeSerializedPair =
  createAction<{ chainId: number; tokenAAddress: string; tokenBAddress: string }>('user/removeSerializedPair')
export const updateUserProfile = createAction<{ profile: IDXProfile }>('user/updateUserProfile')
