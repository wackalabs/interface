import { Trans } from '@lingui/macro'
import { ButtonSecondary } from 'components/Button'
import { useCeramic } from 'hooks/ceramic'
import styled from 'styled-components/macro'

import CeramicIcon from '../../assets/images/ceramicIcon.svg'
import Copy from './Copy'

export default function CeramicAccount() {
  const { idx, authenticate } = useCeramic()

  const parseCeramicIdx = (idx: string) => {
    if (!idx) return null
    return `${idx.slice(0, 10)}...${idx.slice(idx.length - 4, idx.length)}`
  }

  return (
    <YourAccount>
      <InfoCard>
        <AccountGroupingRow>
          <WalletName>
            <Trans>{`${idx ? 'Connected' : 'Connect'} with DID`}</Trans>
          </WalletName>
        </AccountGroupingRow>
        <AccountGroupingRow id="web3-account-identifier-row">
          <AccountControl>
            <div>
              <IconWrapper size={16}>
                <img src={CeramicIcon} alt={'Ceramic logo'} />
              </IconWrapper>
              {idx ? (
                <p> {parseCeramicIdx(idx.id)}</p>
              ) : (
                <WalletAction
                  style={{ fontSize: '.825rem', fontWeight: 400 }}
                  onClick={() => {
                    authenticate()
                  }}
                >
                  <Trans>Authenticate</Trans>
                </WalletAction>
              )}
            </div>
          </AccountControl>
        </AccountGroupingRow>
        {idx && (
          <AccountGroupingRow>
            <AccountControl>
              <div>
                <Copy toCopy={idx.id}>
                  <span style={{ marginLeft: '4px' }}>
                    <Trans>Copy Address</Trans>
                  </span>
                </Copy>
              </div>
            </AccountControl>
          </AccountGroupingRow>
        )}
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
