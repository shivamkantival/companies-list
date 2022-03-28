import { createUseStyles } from 'react-jss';
import StyleTheme from 'typeDefs/styleTheme';
import { flexContainer } from 'utils/styleMixins/flex';

export default createUseStyles<
  'listContainer' | 'emptyText',
  unknown,
  StyleTheme
>(({ spacing }) => ({
  listContainer: {
    flex: '1 auto',
    ...flexContainer({ justifyContent: 'space-around', flexWrap: 'wrap' }),
  },
  emptyText: {
    margin: '0 auto',
    alignSelf: 'center',
  },
}));
