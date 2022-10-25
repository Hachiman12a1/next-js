import { Box } from "@mui/system";
import * as React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";

export function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: 1,
      password: 2,
    },
  });

  function handleLoginSubmit(values: any) {
    console.log(values);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} />
      <InputField name="password" control={control} />
    </Box>
  );
}
