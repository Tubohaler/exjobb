import { CurrentVacanciesFragment } from '@lib/dato-cms';
import { List } from '@mantine/core';

const CurrentVacancies = ({ jobs }: CurrentVacanciesFragment) => {
  return (
    <List type="unordered">
      {jobs.map(({ id, jobTitle, minLevel, maxLevel }) => {
        return (
          <List.Item key={id}>
            {jobTitle} ({minLevel} - {maxLevel})
          </List.Item>
        );
      })}
    </List>
  );
};

export default CurrentVacancies;
