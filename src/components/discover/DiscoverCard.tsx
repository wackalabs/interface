import { Trans } from '@lingui/macro'
import { AutoColumn } from 'components/Column'
import { RowBetween, RowFixed } from 'components/Row'
import useTheme from 'hooks/useTheme'
import useToggledVersion from 'hooks/useToggledVersion'
import AppBody from 'pages/AppBody'
import { darken } from 'polished'
import { useDerivedDiscoverInfo } from 'state/discover/hooks'
import styled from 'styled-components/macro'

import { TYPE } from '../../theme'
import DiscoverHeader from './DiscoverHeader'
import { Wrapper } from './styleds'

const CardPanel = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg2};
  z-index: 1;
  width: initial;
`

const Container = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
  width: initial;
  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.bg3};
  }
`

const BodyRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  justify-content: space-between;
  padding: ${({ selected }) => (selected ? ' 1rem 1rem 0.75rem 1rem' : '1rem 1rem 0.75rem 1rem')};
`

const LabelRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  color: ${({ theme }) => theme.text1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.text2)};
  }
`

const NoteRow = styled(LabelRow)`
  justify-content: flex-end;
`

interface DiscoverCardProps {
  value?: string
}

export default function DiscoverCard({ value }: DiscoverCardProps) {
  const toggledVersion = useToggledVersion()
  const { allowedSlippage } = useDerivedDiscoverInfo(toggledVersion)
  const theme = useTheme()

  return (
    <AppBody>
      <DiscoverHeader allowedSlippage={allowedSlippage} />
      <Wrapper id="discover-page">
        <AutoColumn gap={'sm'}>
          <div style={{ display: 'relative' }}>
            <CardPanel>
              <Container>
                <BodyRow selected={false}>
                  <RowBetween>
                    <RowFixed>
                      <TYPE.body
                        color={theme.text2}
                        fontWeight={400}
                        fontSize={14}
                        style={{ display: 'inline', cursor: 'pointer' }}
                      >
                        <Trans>{value}</Trans>
                      </TYPE.body>
                    </RowFixed>
                  </RowBetween>
                </BodyRow>
                <NoteRow>
                  <RowBetween>
                    <RowFixed style={{ height: '17px' }}>
                      <TYPE.body
                        color={theme.text2}
                        fontWeight={400}
                        fontSize={14}
                        style={{ display: 'inline', cursor: 'pointer' }}
                      >
                        <Trans>Balance</Trans>
                      </TYPE.body>
                    </RowFixed>
                  </RowBetween>
                </NoteRow>
              </Container>
            </CardPanel>
          </div>
        </AutoColumn>
      </Wrapper>
    </AppBody>
  )
}
