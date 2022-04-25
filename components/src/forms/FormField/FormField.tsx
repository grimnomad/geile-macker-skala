import React, { ForwardedRef, ReactElement, Ref, useRef } from 'react';

import { Input, InputProps } from '../../atoms';
import { useCombinedRefs } from '../../hooks';
import { Container, FieldLabel, Hint, Name } from './FormField.styles';

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
  forwardedRef: ForwardedRef<HTMLInputElement>
): ReactElement {
  const { name, label, hint } = props;

  const inputRef = useRef<HTMLInputElement>();

  const ref = useCombinedRefs(inputRef, forwardedRef) as
    | Ref<HTMLInputElement>
    | undefined;

  function onClick(): void {
    inputRef.current?.focus();
  }

  return (
    <Container>
      <FieldLabel htmlFor={name} onClick={onClick}>
        <Name>{label}</Name>
        {hint ? <Hint>{hint}</Hint> : null}
      </FieldLabel>
      <Input {...props} ref={ref} />
    </Container>
  );
}

const FormField = React.forwardRef(FormFieldComponent);

export { FormField };
