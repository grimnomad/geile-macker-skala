import { ForwardedRef, forwardRef, Fragment, ReactElement } from 'react';

import { Input, InputProps } from '../input';
import { Label } from '../label';

interface FormEntryProps
  extends Pick<
    InputProps,
    'value' | 'onChange' | 'onBlur' | 'type' | 'hasError'
  > {
  readonly name: string;
  readonly label: string;
}

function FormEntry(
  props: FormEntryProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const { name, label } = props;

  return (
    <Fragment>
      <Label htmlFor={name}>{label}:</Label>
      <Input {...props} ref={ref} placeholder={label} />
    </Fragment>
  );
}

const ForwardedFormEntry = forwardRef(FormEntry);

export { ForwardedFormEntry as FormEntry };
