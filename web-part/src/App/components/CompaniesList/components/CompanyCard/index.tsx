import { FC } from 'react';
import { ArrayElement } from 'typeDefs/inferArray';
import { GetFilteredCompaniesQuery } from 'generated/graphql';
import { Avatar, Card, Typography } from 'antd';
import useStyles from './styles';

const CompanyCard: FC<{
  data: ArrayElement<
    GetFilteredCompaniesQuery['getFilteredCompanies']['edges']
  >;
}> = ({ data }) => {
  const classes = useStyles();
  return (
    <Card
      title={
        <>
          <Avatar src={data.node.logo} size="default" />
          <span className={classes.headerText}>{data.node.name}</span>
        </>
      }
      className={classes.cardContainer}
      hoverable
    >
      <Typography className={classes.cardDetailsPairContainer}>
        <Typography.Text strong>{'City:'}</Typography.Text>
        <Typography.Text>{data.node.city}</Typography.Text>
      </Typography>
      <Typography className={classes.cardDetailsPairContainer}>
        <Typography.Text strong>{'Specialities:'}</Typography.Text>
        <Typography.Text>{data.node.specialities.join(', ')}</Typography.Text>
      </Typography>
    </Card>
  );
};

export default CompanyCard;
