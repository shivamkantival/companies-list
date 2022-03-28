export function flexContainer(
  options: {
    justifyContent?:
      | 'flex-start'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'flex-end';
    flexDirection?: 'row' | 'column';
    alignItems?: 'flex-start' | 'center' | 'stretch';
    flexWrap?: 'nowrap' | 'wrap';
  } = {}
) {
  return {
    display: 'flex',
    flexDirection: 'row',
    ...options,
  };
}
