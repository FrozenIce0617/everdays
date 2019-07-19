export const columns = [
  {
    title: 'Name',
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
    title: 'Creation Date',
    dataIndex: 'creationDate',
    render: (text, record) => {
      const date = new Date(record.creationDate);

      return date.toDateString();
    },
  },
];
