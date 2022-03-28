import { PropsWithChildren, ReactElement } from 'react';
import { Select, SelectProps } from 'antd';

function SelectMulti<ValueType extends string = string>({
  value,
  onSelect,
  options,
  ...restProps
}: PropsWithChildren<
  {
    value: Array<ValueType>;
    options: ReadonlyArray<{ value: ValueType; label: string }>;
    onSelect: (newSelection: Array<ValueType>) => void;
  } & Omit<SelectProps, 'mode'>
>): ReactElement<any, any> {
  return (
    <Select {...restProps} mode="multiple" value={value} onChange={onSelect}>
      {options.map(option => (
        <Select.Option key={option.value}>{option.label}</Select.Option>
      ))}
    </Select>
  );
}

export default SelectMulti;
