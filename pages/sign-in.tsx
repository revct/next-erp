import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { useSessionStorageState } from "ahooks";
import { useRouter } from "next/dist/client/router";
import { pick } from "lodash-es";

type LoginProps = {
  account: string;
  password: string;
};

const SignIn = () => {
  const [user, setUser] = useSessionStorageState("user", {
    account: "",
  });
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: LoginProps) => {
    setUser(pick(data, ["password"]));
    router.push('/')
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className="flex flex-col items-center mt-16">
        <Avatar className="!bg-red-500 m-2">
          <span
            className="iconify"
            data-icon="fluent:lock-closed-16-filled"
            data-inline="false"
          ></span>
        </Avatar>
        <Typography component="h1" variant="h5">
          登录页面
        </Typography>
        <form noValidate className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("account")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="账号"
            autoFocus
          />
          <TextField
            {...register("password")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="密码"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="记住登录"
          />
          <Button
            type="submit"
            className="!mt-6 !mb-4"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            登录
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                onClick={() => alert("没重置密码功能，自己再想想")}
                variant="body2"
              >
                忘记密码
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => alert("没法注册，找管理去")} variant="body2">
                没有账号？去注册
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
