import { ChangeEvent, FC, useMemo } from 'react';
import { ContructionSpecialities } from 'constants/contructionSpecialities';
import { Form, Input } from 'antd';
import { debounce } from 'lodash';
import SelectMulti from 'components/SelectMulti';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const FORM_FIELD_SIZE = 'small';
const SPECIALITIES_OPTIONS = Object.keys(ContructionSpecialities).map(key => ({
  // @ts-ignore
  value: ContructionSpecialities[key] as ContructionSpecialities,
  label: key,
}));

const Filters: FC<{
  filters: { searchText: string; specialities: Array<ContructionSpecialities> };
  setSearchText: (newSearchText: string) => void;
  setSpecialities: (newSpecialities: Array<ContructionSpecialities>) => void;
}> = ({ filters, setSpecialities, setSearchText }) => {
  const onChangeSearchText = useMemo<
    (event: ChangeEvent<HTMLInputElement>) => void
  >(
    () =>
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
      }, 500),
    [setSearchText]
  );

  return (
    <Form {...layout}>
      <Form.Item name="searchText" label="Search text">
        <Input
          size={FORM_FIELD_SIZE}
          value={filters.searchText}
          onChange={onChangeSearchText}
          placeholder="Filter company by name"
        />
      </Form.Item>
      <Form.Item name="specialities" label="Specialities">
        <SelectMulti<ContructionSpecialities>
          value={filters.specialities}
          options={SPECIALITIES_OPTIONS}
          onSelect={setSpecialities}
          size={FORM_FIELD_SIZE}
          placeholder="Filter company by specialities"
        />
      </Form.Item>
    </Form>
  );
};

export default Filters;
