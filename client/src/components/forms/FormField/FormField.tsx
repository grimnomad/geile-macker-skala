import { ForwardedRef, forwardRef, ReactElement } from 'react';

import { Input, InputProps } from '../../atoms';
import { Container, FieldLabel, Hint, Name } from './styles';

interface FormEntryProps
  extends Pick<
    InputProps,
    'value' | 'onChange' | 'onBlur' | 'type' | 'hasError'
  > {
  readonly name: string;
  readonly label: string;
  readonly hint?: string;
}

function FormFieldComponent(
  props: FormEntryProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const { name, label, hint } = props;

  return (
    <Container>
      <FieldLabel htmlFor={name}>
        <Name>{label}</Name>
        {hint ? <Hint>{hint}</Hint> : null}
      </FieldLabel>
      <Input {...props} ref={ref} />
    </Container>
  );
}

const FormField = forwardRef(FormFieldComponent);

export { FormField };
