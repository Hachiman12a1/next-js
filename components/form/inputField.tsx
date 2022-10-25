import { TextField, TextFieldProps } from "@mui/material";
import { Control, useController } from "react-hook-form";

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export function InputField({
  name,
  control,
  value: externalValue,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  console.log(name, error);

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  );
}
