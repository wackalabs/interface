import { Contract } from '@ethersproject/contracts'
import { abi as GOVERNANCE_ABI } from '@uniswap/governance/build/GovernorAlpha.json'
import { abi as UNI_ABI } from '@uniswap/governance/build/Uni.json'
import { abi as STAKING_REWARDS_ABI } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import { abi as MERKLE_DISTRIBUTOR_ABI } from '@uniswap/merkle-distributor/build/MerkleDistributor.json'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import { abi as QuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import { abi as MulticallABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json'
import { abi as NFTPositionManagerABI } from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'
import { abi as V2MigratorABI } from '@uniswap/v3-periphery/artifacts/contracts/V3Migrator.sol/V3Migrator.json'
import ARGENT_WALLET_DETECTOR_ABI from 'abis/argent-wallet-detector.json'
import EIP_2612 from 'abis/eip_2612.json'
import ENS_PUBLIC_RESOLVER_ABI from 'abis/ens-public-resolver.json'
import ENS_ABI from 'abis/ens-registrar.json'
import ERC20_ABI from 'abis/erc20.json'
import ERC20_BYTES32_ABI from 'abis/erc20_bytes32.json'
import ERC721_ABI from 'abis/erc721.json'
import GOVERNOR_BRAVO_ABI from 'abis/governor-bravo.json'
import WETH_ABI from 'abis/weth.json'
import {
  ARGENT_WALLET_DETECTOR_ADDRESS,
  BANCOR_FORMULA_ADDRESS,
  ENEPTI_ACCOUNT_ADDRESS,
  ENEPTI_ACCOUNT_REGISTRY_ADDRESS,
  ENEPTI_TOKEN_ADDRESS,
  ENS_REGISTRAR_ADDRESSES,
  GOVERNANCE_ALPHA_V0_ADDRESSES,
  GOVERNANCE_ALPHA_V1_ADDRESSES,
  GOVERNANCE_BRAVO_ADDRESSES,
  LMN_TOKEN_ADDRESS,
  MERKLE_DISTRIBUTOR_ADDRESS,
  MULTICALL_ADDRESS,
  NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  QUOTER_ADDRESSES,
  ROOM_BASE_ADDRESS,
  SOCIAL_TOKEN_ADDRESS,
  V2_ROUTER_ADDRESS,
  V3_MIGRATOR_ADDRESSES,
} from 'constants/addresses'
import { useMemo } from 'react'
import { AccountRegistry, BancorFormula, EneptiAccount, EneptiToken, LMNToken, RoomBase, SocialToken } from 'types/enepti'
import { NonfungiblePositionManager, Quoter, UniswapInterfaceMulticall } from 'types/v3'
import { V3Migrator } from 'types/v3/V3Migrator'
import { getContract } from 'utils'

import { abi as AccountRegistryABI } from'../../../core/artifacts/contracts/AccountRegistry.sol/AccountRegistry.json'
import { abi as BancorFormulaABI } from'../../../core/artifacts/contracts/BancorFormula.sol/BancorFormula.json'
import { abi as EneptiAccountABI } from'../../../core/artifacts/contracts/EneptiAccount.sol/EneptiAccount.json'
import { abi as EneptiTokenABI } from'../../../core/artifacts/contracts/EneptiToken.sol/EneptiToken.json'
import { abi as LMNTokenABI } from'../../../core/artifacts/contracts/LMNToken.sol/LMNToken.json'
import { abi as RoomBaseABI } from'../../../core/artifacts/contracts/RoomBase.sol/RoomBase.json'
import { abi as SocialTokenABI } from'../../../core/artifacts/contracts/SocialToken.sol/SocialToken.json'
import { ArgentWalletDetector, EnsPublicResolver, EnsRegistrar, Erc20, Erc721, Weth } from '../abis/types'
import { UNI, WETH9_EXTENDED } from '../constants/tokens'
import { useActiveWeb3React } from './web3'

// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export function useV2MigratorContract() {
  return useContract<V3Migrator>(V3_MIGRATOR_ADDRESSES, V2MigratorABI, true)
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean) {
  const { chainId } = useActiveWeb3React()
  return useContract<Weth>(chainId ? WETH9_EXTENDED[chainId]?.address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useNFTTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc721>(tokenAddress, ERC721_ABI, withSignerIfPossible)
}

export function useArgentWalletDetectorContract() {
  return useContract<ArgentWalletDetector>(ARGENT_WALLET_DETECTOR_ADDRESS, ARGENT_WALLET_DETECTOR_ABI, false)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean) {
  return useContract<EnsRegistrar>(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean) {
  return useContract<EnsPublicResolver>(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useEIP2612Contract(tokenAddress?: string): Contract | null {
  return useContract(tokenAddress, EIP_2612, false)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}

export function useV2RouterContract(): Contract | null {
  return useContract(V2_ROUTER_ADDRESS, IUniswapV2Router02ABI, true)
}

export function useMulticall2Contract() {
  return useContract<UniswapInterfaceMulticall>(MULTICALL_ADDRESS, MulticallABI, false) as UniswapInterfaceMulticall
}

export function useMerkleDistributorContract() {
  return useContract(MERKLE_DISTRIBUTOR_ADDRESS, MERKLE_DISTRIBUTOR_ABI, true)
}

export function useGovernanceV0Contract(): Contract | null {
  return useContract(GOVERNANCE_ALPHA_V0_ADDRESSES, GOVERNANCE_ABI, false)
}

export function useGovernanceV1Contract(): Contract | null {
  return useContract(GOVERNANCE_ALPHA_V1_ADDRESSES, GOVERNANCE_ABI, false)
}

export function useGovernanceBravoContract(): Contract | null {
  return useContract(GOVERNANCE_BRAVO_ADDRESSES, GOVERNOR_BRAVO_ABI, true)
}

export const useLatestGovernanceContract = useGovernanceBravoContract

export function useUniContract() {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? UNI[chainId]?.address : undefined, UNI_ABI, true)
}

export function useStakingContract(stakingAddress?: string, withSignerIfPossible?: boolean) {
  return useContract(stakingAddress, STAKING_REWARDS_ABI, withSignerIfPossible)
}

export function useV3NFTPositionManagerContract(withSignerIfPossible?: boolean): NonfungiblePositionManager | null {
  return useContract<NonfungiblePositionManager>(
    NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
    NFTPositionManagerABI,
    withSignerIfPossible
  )
}

export function useEneptiAccountContract(withSignerIfPossible?: boolean): EneptiAccount | null {
  return useContract<EneptiAccount>(
    ENEPTI_ACCOUNT_ADDRESS,
    EneptiAccountABI,
    withSignerIfPossible
  )
}

export function useEneptiTokenContract(withSignerIfPossible?: boolean): EneptiToken | null {
  return useContract<EneptiToken>(
    ENEPTI_TOKEN_ADDRESS,
    EneptiTokenABI,
    withSignerIfPossible
  )
}

export function useEneptiAccountRegistryContract(withSignerIfPossible?: boolean): AccountRegistry | null {
  return useContract<AccountRegistry>(
    ENEPTI_ACCOUNT_REGISTRY_ADDRESS,
    AccountRegistryABI,
    withSignerIfPossible
  )
}

export function useLMNTokenContract(withSignerIfPossible?: boolean): LMNToken | null {
  return useContract<LMNToken>(
    LMN_TOKEN_ADDRESS,
    LMNTokenABI,
    withSignerIfPossible
  )
}

export function useAccountRegistryContract(withSignerIfPossible?: boolean): AccountRegistry | null {
  return useContract<AccountRegistry>(
    ENEPTI_ACCOUNT_REGISTRY_ADDRESS,
    AccountRegistryABI,
    withSignerIfPossible
  )
}

export function useEneptiRoomContract(withSignerIfPossible?: boolean): RoomBase | null {
  return useContract<RoomBase>(
    ROOM_BASE_ADDRESS,
    RoomBaseABI,
    withSignerIfPossible
  )
}

export function useSocialTokenContract(withSignerIfPossible?: boolean): SocialToken | null {
  return useContract<SocialToken>(
    SOCIAL_TOKEN_ADDRESS,
    SocialTokenABI,
    withSignerIfPossible
  )
}

export function useBancorFormulaContract(withSignerIfPossible?: boolean): BancorFormula | null {
  return useContract<BancorFormula>(
    BANCOR_FORMULA_ADDRESS,
    BancorFormulaABI,
    withSignerIfPossible
  )
}

export function useV3Quoter() {
  return useContract<Quoter>(QUOTER_ADDRESSES, QuoterABI)
}
