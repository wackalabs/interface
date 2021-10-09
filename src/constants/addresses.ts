import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.OPTIMISTIC_KOVAN]),
  [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V3_FACTORY_ADDRESS, [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
  ]
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISTIC_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])

export const ENEPTI_ACCOUNT_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_EneptiAccount || '0x5CB12Ced56Cf6c1D262A3d39F0b2bEB7D25D4554',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_EneptiAccount || '0x5CB12Ced56Cf6c1D262A3d39F0b2bEB7D25D4554',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_EneptiAccount || '0x5CB12Ced56Cf6c1D262A3d39F0b2bEB7D25D4554',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_EneptiAccount || '0x5CB12Ced56Cf6c1D262A3d39F0b2bEB7D25D4554',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_EneptiAccount || '0x5CB12Ced56Cf6c1D262A3d39F0b2bEB7D25D4554',
}

export const ENEPTI_TOKEN_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_EneptiToken || '0x88dedcD77a53e8BEC9b67Bb028c5A6AB6b3102C7',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_EneptiToken || '0x88dedcD77a53e8BEC9b67Bb028c5A6AB6b3102C7',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_EneptiToken || '0x88dedcD77a53e8BEC9b67Bb028c5A6AB6b3102C7',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_EneptiToken || '0x88dedcD77a53e8BEC9b67Bb028c5A6AB6b3102C7',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_EneptiToken || '0x88dedcD77a53e8BEC9b67Bb028c5A6AB6b3102C7',
}

export const ROOM_BASE_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_RoomBase || '0xC44eA6932e753520c94A4755d78E8F5f52B0e255',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_RoomBase || '0xC44eA6932e753520c94A4755d78E8F5f52B0e255',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_RoomBase || '0xC44eA6932e753520c94A4755d78E8F5f52B0e255',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_RoomBase || '0xC44eA6932e753520c94A4755d78E8F5f52B0e255',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_RoomBase || '0xC44eA6932e753520c94A4755d78E8F5f52B0e255',
}

export const ENEPTI_ACCOUNT_REGISTRY_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_AccountRegistry || '0xf5A3Bfe6E249082d533940F761ABC8a61F7C5640',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_AccountRegistry || '0xf5A3Bfe6E249082d533940F761ABC8a61F7C5640',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_AccountRegistry || '0xf5A3Bfe6E249082d533940F761ABC8a61F7C5640',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_AccountRegistry || '0xf5A3Bfe6E249082d533940F761ABC8a61F7C5640',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_AccountRegistry || '0xf5A3Bfe6E249082d533940F761ABC8a61F7C5640',
}

export const LMN_TOKEN_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_LMNToken || '0x8392f885Ca370d0A8a422A59295676B0DB49b498',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_LMNToken || '0x8392f885Ca370d0A8a422A59295676B0DB49b498',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_LMNToken || '0x8392f885Ca370d0A8a422A59295676B0DB49b498',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_LMNToken || '0x8392f885Ca370d0A8a422A59295676B0DB49b498',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_LMNToken || '0x8392f885Ca370d0A8a422A59295676B0DB49b498',
}

export const SOCIAL_TOKEN_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_SocialToken || '0xfC9BE3e71293c76cc243e0b66891533525FAcD3d',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_SocialToken || '0xfC9BE3e71293c76cc243e0b66891533525FAcD3d',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_SocialToken || '0xfC9BE3e71293c76cc243e0b66891533525FAcD3d',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_SocialToken || '0xfC9BE3e71293c76cc243e0b66891533525FAcD3d',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_SocialToken || '0xfC9BE3e71293c76cc243e0b66891533525FAcD3d',
}

export const BANCOR_FORMULA_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: process.env.REACT_APP_BancorFormula || '0xba5Eeb482518587656aaB2e71A8b5FBB5790FDA4',
  [SupportedChainId.ROPSTEN]: process.env.REACT_APP_BancorFormula || '0xba5Eeb482518587656aaB2e71A8b5FBB5790FDA4',
  [SupportedChainId.GOERLI]: process.env.REACT_APP_BancorFormula || '0xba5Eeb482518587656aaB2e71A8b5FBB5790FDA4',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_BancorFormula || '0xba5Eeb482518587656aaB2e71A8b5FBB5790FDA4',
  [SupportedChainId.RINKEBY]: process.env.REACT_APP_BancorFormula || '0xba5Eeb482518587656aaB2e71A8b5FBB5790FDA4',
}
