import { createObject, CreateScaleDTO } from '@gms/shared';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import { useCreateScale } from '../../../api';
import { Button, Form, FormButtonGroup, FormEntry } from '../../../components';

interface CreateScaleFormProps {
  onClose: () => void;
  onOK: () => void;
}

interface FormValues {
  name: string;
}

function CreateScaleForm(props: CreateScaleFormProps): ReactElement {
  const { onClose, onOK } = props;

  const { register, handleSubmit } = useForm<FormValues>();

  const { mutate: createScale } = useCreateScale();
  const queryClient = useQueryClient();

  function onSubmit(data: FormValues): void {
    const { name } = data;
    const scaleDTO = createObject<CreateScaleDTO>({ name });

    createScale(scaleDTO, {
      onSuccess: () => {
        onOK();
        queryClient.invalidateQueries('scales');
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormEntry
        label="Name"
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
