import { ReactElement } from 'react';

import { EntryContainer } from './styles';

interface SideBarEntryProps {
  readonly name: string;
}

function SideBarEntry(props: SideBarEntryProps): ReactElement {
  const { name } = props;

  return <EntryContainer>{name}</EntryContainer>;
}

export type { SideBarEntryProps };
export { SideBarEntry };
