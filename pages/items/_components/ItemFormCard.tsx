import { Box, Button, MenuItem, Paper, TextField } from "@material-ui/core";
import { Item, Prisma } from "@prisma/client";
import { cloneDeep, forEach, isFunction } from "lodash";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

type DefaultValueProps = Omit<Prisma.ItemUpdateInput, "Stock" | "Order">;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DefaultValueProps;
  onSubmit?: (data: object) => void;
  loading?: boolean;
}

const defaultData = {
  name: "",
  code: "",
  specs: "",
  supplier: {},
} as DefaultValueProps;

const PersonalInfoCard: FunctionComponent<IProps> = ({
  defaultValues,
  onSubmit,
  loading,
}) => {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: defaultData,
  });
  useEffect(() => {
    if (!loading) {
      reset(cloneDeep(defaultValues));
    }
  }, [loading, reset, defaultValues]);

  const handleCreate = async (data = {}) => {
    await fetch("/api/persons", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const handleSave = async (data: any) => {
    if (data.id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }
    if (isFunction(onSubmit)) {
      onSubmit(data);
    } else {
      router.back();
    }
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/persons", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <Paper>
      <Box component="form" onSubmit={handleSubmit(handleSave)}>
        <Box className="px-4 py-5 bg-white grid grid-cols-2 gap-6">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField label="品名" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="specs"
            control={control}
            render={({ field }) => (
              <TextField label="电话" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="specs"
            control={control}
            render={({ field }) => (
              <TextField label="所属公司" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="supplier.name"
            control={control}
            render={({ field }) => (
              <TextField label="供应商" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField label="街道地址" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField label="城市" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextField label="省/州" variant="outlined" {...field} />
            )}
          ></Controller>

          <Controller
            name="zipcode"
            control={control}
            render={({ field }) => (
              <TextField label="邮政编码" variant="outlined" {...field} />
            )}
          ></Controller>
        </Box>
        <Box className="px-4 py-3 bg-gray-50 text-right">
          <Button color="primary" variant="contained" type="submit">
            保存
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonalInfoCard;
