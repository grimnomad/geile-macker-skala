import { Button, Form, FormButtonGroup, FormField } from '@gms/components';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateScale } from '../../../api';
import { CreateScale } from '../../../models';

interface CreateScaleFormProps {
  onClose: () => void;
  onOK: () => void;
}

function CreateScaleForm(props: CreateScaleFormProps): ReactElement {
  const { onClose, onOK } = props;

  const { register, handleSubmit, formState } = useForm<CreateScale>();
  const { errors } = formState;

  const { mutate: createScale } = useCreateScale();

  function onSubmit(data: CreateScale): void {
    createScale(data, {
      onSuccess: () => {
        onOK();
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Name"
        hint={errors.name?.message}
        hasError={!!errors.name}
        {...register('name', {
          required: 'Der Name muss angegeben werden!'
        })}
      />
      <FormButtonGroup>
        <Button type="submit">Erstellen</Button>
        <Button type="button" onClick={onClose}>
          Abbrechen
        </Button>
      </FormButtonGroup>
    </Form>
  );
}

export type { CreateScaleFormProps };
export { CreateScaleForm };
