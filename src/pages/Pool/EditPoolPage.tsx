import { t, Trans } from '@lingui/macro'
import { ButtonPrimary } from 'components/Button'
import { AutoColumn } from 'components/Column'
import { RowBetween, RowFixed } from 'components/Row'
import { SwitchLocaleLink } from 'components/SwitchLocaleLink'
import { ResizingTextArea, TextInput } from 'components/TextInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserProfileManager } from 'state/user/hooks'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'

const PageWrapper = styled.div`
  min-width: 800px;
  max-width: 960px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 680px;
    max-width: 680px;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-width: 600px;
    max-width: 600px;
  `};

  @media only screen and (max-width: 620px) {
    min-width: 500px;
    max-width: 500px;
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    min-width: 340px;
    max-width: 340px;
  `};
`

// responsive text
// disable the warning because we don't use the end prop, we just want to filter it out
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Label = styled(({ end, ...props }) => <TYPE.label {...props} />)<{ end?: boolean }>`
  display: flex;
  font-size: 16px;
  justify-content: ${({ end }) => (end ? 'flex-end' : 'flex-start')};
  align-items: center;
`

const HoverText = styled(TYPE.main)`
  text-decoration: none;
  color: ${({ theme }) => theme.text3};
  :hover {
    color: ${({ theme }) => theme.text1};
    text-decoration: none;
  }
`

const ResponsiveRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%:
  `};
`

const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex: 1 1 auto;
    width: 49%;
  `};
`

export function EditPoolPage({}) {
  const [profile, setProfile] = useUserProfileManager()

  const [name, setName] = useState<string>(profile?.name || '')
  const [url, setUrl] = useState<string>(profile?.url || '')
  const [description, setDescription] = useState<string>(profile?.description || '')

  return (
    <>
      <PageWrapper>
        <AutoColumn gap="md">
          <AutoColumn gap="sm">
            <Link style={{ textDecoration: 'none', width: 'fit-content', marginBottom: '1.5rem' }} to="/pool">
              <HoverText>
                <Trans>← Back to Account Overview</Trans>
              </HoverText>
            </Link>
            <AutoColumn gap="md" style={{ marginBottom: '16px' }}>
              <TYPE.label fontSize={'16px'} mr="10px">
                Name
              </TYPE.label>
              <TextInput
                value={name || profile?.name || ''}
                onUserInput={(input) => { setName(input) }}
                placeholder={t`Full Name`}
                fontSize="16px"
              />
            </AutoColumn>
            <AutoColumn gap="md" style={{ marginBottom: '16px' }}>
              <TYPE.label fontSize={'16px'} mr="10px">
                Website
              </TYPE.label>
              <TextInput
                value={url || profile?.url || ''}
                onUserInput={(input) => { setUrl(input) }}
                placeholder={t`Website Url`}
                fontSize="16px"
              />
            </AutoColumn>
            <AutoColumn gap="md" style={{ marginBottom: '16px' }}>
              <TYPE.label fontSize={'16px'} mr="10px">
                Bio
              </TYPE.label>
              <ResizingTextArea
                value={description || profile?.description || ''}
                onUserInput={(input) => { setDescription(input) }}
                placeholder={t`Bio`}
                fontSize="16px"
              />
            </AutoColumn>

            <RowBetween />

            <ResponsiveButtonPrimary
              as={Link}
              to={`/pool`}
              onClick={() => setProfile({ name, url, description })}
              width="fit-content"
              padding="6px 8px"
              $borderRadius="12px"
              type="text"
            >
              <Trans>Save</Trans>
            </ResponsiveButtonPrimary>

          </AutoColumn>
        </AutoColumn>
      </PageWrapper>
      <SwitchLocaleLink />
    </>
  )
}
