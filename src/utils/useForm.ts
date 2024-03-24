import { useState } from 'react';

interface FormValues {
  [key: string]: string;
}

type FormErrors = Partial<FormValues>;

type FormEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface UseFormOptions {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  validate?: (values: FormValues) => FormErrors;
}

const useForm = ({ initialValues, onSubmit, validate }: UseFormOptions) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange: FormEventHandler = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors);
      if (Object.keys(formErrors).length === 0) {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
