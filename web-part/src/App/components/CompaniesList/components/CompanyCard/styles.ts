import { createUseStyles } from 'react-jss';
import StyleTheme from 'typeDefs/styleTheme';
import { flexContainer } from 'utils/styleMixins/flex';

export default createUseStyles<
  'cardContainer' | 'headerText' | 'cardDetailsPairContainer',
  unknown,
  StyleTheme
>(({ spacing }) => ({
  cardContainer: {
    width: spacing(65),
    margin: `${spacing(4)} ${spacing(1)}`,
    cursor: 'initial',
  },
  headerText: {
    marginLeft: spacing(2),
  },
  cardDetailsPairContainer: {
    ...flexContainer({}),
    margin: `${spacing(1)} 0`,
    '& > :first-child': {
      marginRight: spacing(1),
    },
  },
}));
