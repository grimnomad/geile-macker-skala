import { createObject, CreateScaleDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import { ScaleQueryFactory, useCreateScale } from '../../../api';
import { Button, Form, FormButtonGroup, FormField } from '../../../components';

interface CreateScaleFormProps {
  onClose: () => void;
  onOK: () => void;
}

interface FormValues {
  name: string;
}

function CreateScaleForm(props: CreateScaleFormProps): ReactElement {
  const { onClose, onOK } = props;

  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;

  const { mutate: createScale } = useCreateScale();
  const queryClient = useQueryClient();

  function onSubmit(data: FormValues): void {
    const { name } = data;
    const scaleDTO = createObject<CreateScaleDTO>({ name });

    createScale(scaleDTO, {
      onSuccess: () => {
        onOK();
        queryClient.invalidateQueries(ScaleQueryFactory.all);
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
