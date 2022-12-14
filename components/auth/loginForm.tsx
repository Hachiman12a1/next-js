import { LoginPayload } from "@/models";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(4, "Username is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),
  });

  const [showPassWord, setShowPassWord] = React.useState(false);

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  function handleLoginSubmit(payload: LoginPayload) {
    console.log(payload);
    onSubmit?.(payload);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} />
      <InputField
        type={showPassWord ? "text" : "password"}
        name="password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassWord((x) => !x)}
              >
                {showPassWord ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
