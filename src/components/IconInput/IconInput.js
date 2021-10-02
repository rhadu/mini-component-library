import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    '--fontSize': '14px',
    '--padding': '4px 0 2px 24px',
    '--borderSize': '1px',
    iconSize: 16,
    strokeWidth: 1.5,
  },
  large: {
    '--fontSize': '18px',
    '--padding': '7px 0 4px 36px',
    '--borderSize': '2px',
    iconSize: 24,
    strokeWidth: 2,
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size]

  return (
    
    <InputWrapper style={{ '--width': width + 'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputElement style={styles} placeholder={placeholder}></InputElement>
      <InputIcon id={icon} strokeWidth={styles.strokeWidth} size={styles.iconSize}></InputIcon>
    </InputWrapper>
  )
}

const InputWrapper = styled.label`
  position: relative;
  display: block;
  width: var(--width);
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }

`

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

const InputElement = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: var(--fontSize);
  padding: var(--padding);
  color: inherit;
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
