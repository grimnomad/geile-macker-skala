import { Fragment, ReactElement } from 'react';

import { Input, InputProps } from '../input';
import { Label } from '../label';

interface FormEntryProps
  extends Pick<
    InputProps,
    'value' | 'onChange' | 'onBlur' | 'type' | 'hasError'
  > {
  readonly id: string;
  readonly label: string;
}

function FormEntry(props: FormEntryProps): ReactElement {
  const { id, label } = props;

  return (
    <Fragment>
      <Label htmlFor={id}>{label}:</Label>
      <Input {...props} id={id} placeholder={label} />
    </Fragment>
  );
}

export { FormEntry };
