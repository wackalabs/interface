import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { CeramicApi } from '@ceramicnetwork/common'
import CeramicClient from '@ceramicnetwork/http-client'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { IDX } from '@ceramicstudio/idx'
import { CERAMIC_MAINNET_API_URL, CERAMIC_TESTNET_API_URL } from 'constants/ceramic'
import { TESTNET_CHAIN_IDS } from 'constants/chains'
import { DID } from 'dids'
import KeyDidResolver from 'key-did-resolver'
import { useEffect, useState } from 'react'

import { useActiveWeb3React } from './web3'

declare global {
  interface Window {
    ceramic?: CeramicApi
    did?: DID
    idx?: IDX
    [index: string]: any
  }
}

export function useCeramic() {
  const { account, chainId } = useActiveWeb3React()
  const [ceramicAuthenticated, setCeramicAuthenticated] = useState<boolean>(false)

  const ceramicAuthenticate = async () => {
    if (!window.ceramic || !window.ceramic.did || !account) return

    try {
      const threeIdConnect = new ThreeIdConnect()
      const authProvider = new EthereumAuthProvider(window.ethereum, account)
      await threeIdConnect.connect(authProvider)

      const provider = await threeIdConnect.getDidProvider()
      window.ceramic.did.setProvider(provider)

      await window.ceramic.did.authenticate()
      await window.ceramic.setDID(window.ceramic.did)

      const idx = new IDX({ ceramic: window.ceramic })
      window.idx = idx

      console.log('Ceramic DID authenticated', window.ceramic.did)

      setCeramicAuthenticated(true)
    } catch (e) {
      console.error('Ceramic DID authenticate failed', e)
    }
  }

  useEffect(() => {
    if (!account) return

    const isTestnet = chainId ? TESTNET_CHAIN_IDS.includes(chainId) : false
    const endpoint = isTestnet ? CERAMIC_TESTNET_API_URL : CERAMIC_MAINNET_API_URL

    const ceramic = new CeramicClient(endpoint)
    const resolver = {
      ...KeyDidResolver.getResolver(),
      ...ThreeIdResolver.getResolver(ceramic),
    }

    const did = new DID({ resolver })
    ceramic.did = did
    window.ceramic = ceramic
    window.did = did
    window.TileDocument = TileDocument
    window.Caip10Link = Caip10Link
  }, [chainId, account])

  return {
    authenticated: window.ceramic || ceramicAuthenticated,
    ceramic: window.ceramic,
    did: window.did,
    idx: window.idx,
    authenticate: ceramicAuthenticate,
  }
}

export async function getDidFromAddress(address: string): Promise<string | null> {
  if (!window.ceramic) return null
  const accountLink = await Caip10Link.fromAccount(
    window.ceramic,
    address,
  )
  const linkedDid = accountLink.did
  return linkedDid && isDidFormat(linkedDid) ? linkedDid : null
}

export function isDidFormat(value: string): boolean {
  return value.startsWith('did:3:')
}
