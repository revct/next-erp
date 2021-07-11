import { cloneDeep, isFunction } from "lodash";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { createItem, updateItem } from "@/data/items";

type DefaultValueProps = {
  id?: number;
  name?: string | null;
  code?: string | null;
  specs?: string | null;
  supplier: {
    name: string;
  };
  supplierId?: number | null;
};

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DefaultValueProps;
  onSubmit?: (data: object) => void;
  loading?: boolean;
}

const defaultData = {
  name: "",
  code: "",
  specs: "",
  supplier: {
    name: "",
  },
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

  const [isLoading, setLoading] = useState(false);
  const handleCreate = async (data = {}) => {
    setLoading(true);
    try {
      await createItem(data);
    } finally {
      setLoading(false);
    }
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
    setLoading(true);
    try {
      await updateItem(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
      <Card>
        <CardHeader title="物料信息"></CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
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
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="供应商信息"></CardHeader>
        <CardContent></CardContent>
      </Card>
      <Box className="px-4 py-3 bg-gray-50 text-right">
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isLoading}
        >
          保存
        </Button>
      </Box>
    </form>
  );
};

export default PersonalInfoCard;
