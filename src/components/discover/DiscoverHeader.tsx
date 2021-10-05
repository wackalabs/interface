import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { TYPE } from '../../theme'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledDiscoverHeader = styled.div`
  padding: 1rem 1.25rem 0.5rem 1.25rem;
  width: 100%;
  color: ${({ theme }) => theme.text2};
`

export default function DiscoverHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  return (
    <StyledDiscoverHeader>
      <RowBetween>
        <RowFixed>
          <TYPE.black fontWeight={500} fontSize={16} style={{ marginRight: '8px' }}>
            <Trans>Discover</Trans>
          </TYPE.black>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledDiscoverHeader>
  )
}
