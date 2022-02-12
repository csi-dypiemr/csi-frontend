import React, { CSSProperties, FunctionComponent } from 'react'
import Tooltip from '@atlaskit/tooltip'
import Select, {
  ClearIndicatorProps,
  components,
  MultiValueGenericProps,
} from 'react-select'
import { CSSObject } from '@emotion/serialize'
export interface ColourOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const CustomClearText: FunctionComponent = () => <>clear all</>
const ClearIndicator = (props: ClearIndicatorProps<ColourOption, true>) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  )
}

const ClearIndicatorStyles = (
  base: CSSObject,
  state: ClearIndicatorProps<ColourOption>,
): CSSObject => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
})
const MultiValueLabel = (props: MultiValueGenericProps<ColourOption>) => {
  return (
    <Tooltip content={''}>
      <components.MultiValueLabel {...props} />
    </Tooltip>
  )
}

export default function ChipSelect() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ ClearIndicator, MultiValueLabel }}
      defaultValue={colourOptions[0]}
      isMulti
          options={colourOptions}
          className=" relative block w-full px-3 py-2 border border-white bg-black placeholder-white text-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  rounded"
    />
  )
}
