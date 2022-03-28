import { useMemo, useState } from 'react';
import { ContructionSpecialities } from 'constants/contructionSpecialities';

export default function useFiltersState() {
  const [searchText, setSearchText] = useState<string>('');
  const [specialities, setSpecialities] = useState<
    Array<ContructionSpecialities>
  >([]);

  return useMemo(
    () => ({
      filters: { searchText, specialities },
      setSpecialities,
      setSearchText,
    }),
    [searchText, specialities]
  );
}
