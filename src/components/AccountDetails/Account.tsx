import { Trans } from '@lingui/macro'
import { ButtonSecondary } from 'components/Button'
import { fortmatic, injected, portis, walletconnect, walletlink } from 'connectors'
import { SUPPORTED_WALLETS } from 'constants/wallet'
import { useActiveWeb3React } from 'hooks/web3'
import { ExternalLink as LinkIcon } from 'react-feather'
import styled from 'styled-components/macro'
import { shortenAddress } from 'utils'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import FortmaticIcon from '../../assets/images/fortmaticIcon.png'
import PortisIcon from '../../assets/images/portisIcon.png'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import { ExternalLink } from '../../theme'
import Identicon from '../Identicon'
import Copy from './Copy'

interface AccountProps {
  ENSName?: string
  openOptions: () => void
}

export default function Account({ ENSName, openOptions }: AccountProps) {
  const { chainId, account, connector } = useActiveWeb3React()

  function formatConnectorName() {
    const { ethereum } = window
    const isMetaMask = !!(ethereum && ethereum.isMetaMask)
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        (k) =>
          SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK'))
      )
      .map((k) => SUPPORTED_WALLETS[k].name)[0]
    return (
      <WalletName>
        <Trans>Connected with {name}</Trans>
      </WalletName>
    )
  }

  function getStatusIcon() {
    if (connector === injected) {
      return (
        <IconWrapper size={16}>
          <Identicon />
        </IconWrapper>
      )
    } else if (connector === walletconnect) {
      return (
        <IconWrapper size={16}>
          <img src={WalletConnectIcon} alt={'WalletConnect logo'} />
        </IconWrapper>
      )
    } else if (connector === walletlink) {
      return (
        <IconWrapper size={16}>
          <img src={CoinbaseWalletIcon} alt={'Coinbase Wallet logo'} />
        </IconWrapper>
      )
    } else if (connector === fortmatic) {
      return (
        <IconWrapper size={16}>
          <img src={FortmaticIcon} alt={'Fortmatic logo'} />
        </IconWrapper>
      )
    } else if (connector === portis) {
      return (
        <>
          <IconWrapper size={16}>
            <img src={PortisIcon} alt={'Portis logo'} />
            <MainWalletAction
              onClick={() => {
                portis.portis.showPortis()
              }}
            >
              <Trans>Show Portis</Trans>
            </MainWalletAction>
          </IconWrapper>
        </>
      )
    }
    return null
  }

  return (
    <YourAccount>
      <InfoCard>
        <AccountGroupingRow>
          {formatConnectorName()}
          <div>
            {connector !== injected && connector !== walletlink && (
              <WalletAction
                style={{ fontSize: '.825rem', fontWeight: 400, marginRight: '8px' }}
                onClick={() => {
                  ;(connector as any).close()
                }}
              >
                <Trans>Disconnect</Trans>
              </WalletAction>
            )}
            <WalletAction
              style={{ fontSize: '.825rem', fontWeight: 400 }}
              onClick={() => {
                openOptions()
              }}
            >
              <Trans>Change</Trans>
            </WalletAction>
          </div>
        </AccountGroupingRow>
        <AccountGroupingRow id="web3-account-identifier-row">
          <AccountControl>
            {ENSName ? (
              <>
                <div>
                  {getStatusIcon()}
                  <p> {ENSName}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  {getStatusIcon()}
                  <p> {account && shortenAddress(account)}</p>
                </div>
              </>
            )}
          </AccountControl>
        </AccountGroupingRow>
        <AccountGroupingRow>
          {ENSName ? (
            <>
              <AccountControl>
                <div>
                  {account && (
                    <Copy toCopy={account}>
                      <span style={{ marginLeft: '4px' }}>
                        <Trans>Copy Address</Trans>
                      </span>
                    </Copy>
                  )}
                  {chainId && account && (
                    <AddressLink
                      hasENS={!!ENSName}
                      isENS={true}
                      href={getExplorerLink(chainId, ENSName, ExplorerDataType.ADDRESS)}
                    >
                      <LinkIcon size={16} />
                      <span style={{ marginLeft: '4px' }}>
                        <Trans>View on Explorer</Trans>
                      </span>
                    </AddressLink>
                  )}
                </div>
              </AccountControl>
            </>
          ) : (
            <>
              <AccountControl>
                <div>
                  {account && (
                    <Copy toCopy={account}>
                      <span style={{ marginLeft: '4px' }}>
                        <Trans>Copy Address</Trans>
                      </span>
                    </Copy>
                  )}
                  {chainId && account && (
                    <AddressLink
                      hasENS={!!ENSName}
                      isENS={false}
                      href={getExplorerLink(chainId, account, ExplorerDataType.ADDRESS)}
                    >
                      <LinkIcon size={16} />
                      <span style={{ marginLeft: '4px' }}>
                        <Trans>View on Explorer</Trans>
                      </span>
                    </AddressLink>
                  )}
                </div>
              </AccountControl>
            </>
          )}
        </AccountGroupingRow>
      </InfoCard>
    </YourAccount>
  )
}

const InfoCard = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: 20px;
  position: relative;
  display: grid;
  grid-row-gap: 12px;
  margin-bottom: 20px;
`

const AccountGroupingRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text1};

  div {
    ${({ theme }) => theme.flexRowNoWrap}
    align-items: center;
  }
`

const YourAccount = styled.div`
  h5 {
    margin: 0 0 1rem 0;
    font-weight: 400;
  }

  h4 {
    margin: 0;
    font-weight: 500;
  }
`

const AccountControl = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 0;
  width: 100%;

  font-weight: 500;
  font-size: 1.25rem;

  a:hover {
    text-decoration: underline;
  }

  p {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const AddressLink = styled(ExternalLink)<{ hasENS: boolean; isENS: boolean }>`
  font-size: 0.825rem;
  color: ${({ theme }) => theme.text3};
  margin-left: 1rem;
  font-size: 0.825rem;
  display: flex;
  :hover {
    color: ${({ theme }) => theme.text2};
  }
`

const WalletName = styled.div`
  width: initial;
  font-size: 0.825rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text3};
`

const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`

const WalletAction = styled(ButtonSecondary)`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 0.825rem;
  padding: 4px 6px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const MainWalletAction = styled(WalletAction)`
  color: ${({ theme }) => theme.primary1};
`