import React from 'react';
import IntlMessage from '../../components/intlMessages';

export const columns = [
  {
    title: <IntlMessage id="table.name" />,
    dataIndex: 'name',
    render: (text, record) => {
      const { name } = record;
      const strName = `${name.first || ''} ${name.middle || ''} ${name.last ||
        ''}`;

      if (strName === '  ') {
        return 'Unknown Name';
      }

      return strName;
    },
  },
  {
    title: <IntlMessage id="table.creationDate" />,
    dataIndex: 'creationDate',
    render: (text, record) => {
      const date = new Date(record.creationDate);

      return date.toDateString();
    },
  },
];
