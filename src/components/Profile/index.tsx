import { Trans } from '@lingui/macro'
import { AutoColumn } from 'components/Column'
import { Break, CardBGImage, CardNoise } from 'components/earn/styled'
import { IDXProfile } from 'state/user/actions'
import styled from 'styled-components/macro'

import { StyledInternalLink, TYPE } from '../../theme'
import { ButtonPrimary } from '../Button'
import { RowBetween, RowFlat } from '../Row'

interface ProfileProps {
  id: string
  profile: IDXProfile
}

export default function Profile({ id, profile, ...rest }: ProfileProps) {
  return (
    <Wrapper id={id} showBackground={true} bgColor={'white'} {...rest}>
      <CardBGImage desaturate />
      <CardNoise />

      <TopSection>
        <TYPE.white fontWeight={600} fontSize={24} style={{ marginLeft: '8px', minWidth: 150 }}>
          <Trans>{profile.name}</Trans>
        </TYPE.white>
        <RowFlat/>
        <StyledInternalLink to={`/pool/edit`} style={{ width: '100%' }}>
          <ButtonPrimary padding="8px" $borderRadius="8px">
            <Trans>Edit Profile</Trans>
          </ButtonPrimary>
        </StyledInternalLink>
      </TopSection>

      <StatContainer>
        <RowBetween>
          <TYPE.white>
            <Trans>Website URL</Trans>
          </TYPE.white>
          <TYPE.white>
            {profile.url}
          </TYPE.white>
        </RowBetween>
        <RowBetween>
          <TYPE.white>
            <Trans>Bio</Trans>
          </TYPE.white>
          <TYPE.white>
            <Trans>
              {profile.description}
            </Trans>
          </TYPE.white>
        </RowBetween>
      </StatContainer>

      <Break />
      <BottomSection showBackground={true}>
        <TYPE.black color={'white'} fontWeight={500}>
          <span>
            <Trans>Your rate</Trans>
          </span>
        </TYPE.black>

        <TYPE.black style={{ textAlign: 'right' }} color={'white'} fontWeight={500}>
          <span role="img" aria-label="wizard-icon" style={{ marginRight: '0.5rem' }}>
            ⚡
          </span>
            <Trans>0 LMN / week</Trans>
        </TYPE.black>
      </BottomSection>
    </Wrapper>
  )
}

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const Wrapper = styled(AutoColumn)<{ showBackground: boolean; bgColor: any }>`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  position: relative;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '1')};
  background: ${({ theme, bgColor, showBackground }) =>
    `radial-gradient(91.85% 100% at 1.84% 0%, ${bgColor} 0%, ${showBackground ? theme.black : theme.bg5} 100%) `};
  color: ${({ theme, showBackground }) => (showBackground ? theme.white : theme.text1)} !important;

  ${({ showBackground }) =>
    showBackground &&
    `  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);`}
`

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 120px;
  grid-gap: 0px;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 48px 1fr 96px;
  `};
`

const BottomSection = styled.div<{ showBackground: boolean }>`
  padding: 12px 16px;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '0.4')};
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  z-index: 1;
`
