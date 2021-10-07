import { memo, useCallback, useRef } from 'react'
import styled from 'styled-components/macro'

const Input = styled.input<{ error?: boolean; fontSize?: string }>`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};

  font-size: ${({ fontSize }) => fontSize || '18px'};
  outline: none;
  border: none;
  flex: 1 1 auto;
  
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};
  
  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }
  transition: border 100ms;
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
  
  overflow: hidden;
  text-overflow: ellipsis;
  
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const SearchInput = styled.input`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};
  -webkit-appearance: none;

  font-size: 18px;

  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }
  transition: border 100ms;
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
`

const TextAreaInput = styled.textarea<{ error?: boolean; fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || '18px'};
  position: relative;
  outline: none;
  border: none;
  flex: 1 1 auto;
  resize: none;
  background: none;
  display: flex;

  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};
  outline: none;
  padding: 16px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.2;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }
  transition: border 100ms;
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
`

export const TextInput = ({
  className,
  value,
  onUserInput,
  placeholder,
  fontSize,
}: {
  className?: string
  value: string
  onUserInput: (value: string) => void
  placeholder: string
  fontSize: string
}) => {
  const handleInput = useCallback(
    (event) => {
      onUserInput(event.target.value)
    },
    [onUserInput]
  )

  return (
    <div className={className}>
      <Input
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder={placeholder || ''}
        onChange={handleInput}
        value={value}
        fontSize={fontSize}
      />
    </div>
  )
}

export const ResizingTextArea = memo(
  ({
    className,
    value,
    onUserInput,
    placeholder,
    fontSize,
  }: {
    className?: string
    value: string
    onUserInput: (value: string) => void
    placeholder: string
    fontSize: string
  }) => {
    const inputRef = useRef<HTMLTextAreaElement>(document.createElement('textarea'))

    const handleInput = useCallback(
      (event) => {
        inputRef.current.style.height = 'auto'
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
        onUserInput(event.target.value)
      },
      [onUserInput]
    )

    return (
      <TextAreaInput
        style={{ height: 'auto', minHeight: '500px' }}
        className={className}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder={placeholder || ''}
        onChange={handleInput}
        value={value}
        fontSize={fontSize}
        ref={inputRef}
      />
    )
  }
)

ResizingTextArea.displayName = 'ResizingTextArea'
