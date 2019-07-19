export const dateCompare = (a, b) => {
  const creationDateA = (a && a.creationDate) || 0;
  const creationDateB = (b && b.creationDate) || 0;
  const dateA = new Date(creationDateA);
  const dateB = new Date(creationDateB);

  return dateA - dateB;
};

export const nameCompare = (a, b) => {
  const nameA = (a && a.name) || {};
  const nameB = (b && b.name) || {};
  let strA = `${nameA.first || ''} ${nameA.middle || ''} ${nameA.last || ''}`;
  let strB = `${nameB.first || ''} ${nameB.middle || ''} ${nameB.last || ''}`;
  if (strA === '  ') {
    strA = 'Unknown Name';
  }
  if (strB === '  ') {
    strB = 'Unknown Name';
  }
  console.log(strA, strB);
  return strA.localeCompare(strB);
};
