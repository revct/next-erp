import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createItem, updateItem } from "@/data/items";
import { Input } from "@chakra-ui/react";

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

const ItemForm: FunctionComponent<IProps> = ({
  defaultValues,
  onSubmit,
  loading,
}) => {
  const router = useRouter();
  const { handleSubmit, control, reset, register } = useForm({
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
      <div>
        <div>物料信息</div>
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input placeholder="品名" {...register("name")} />
            )}
          ></Controller>

          <Controller
            name="specs"
            control={control}
            render={({ field }) => (
              <Input placeholder="电话" {...register("specs")} />
            )}
          ></Controller>

          <Controller
            name="specs"
            control={control}
            render={({ field }) => (
              <Input placeholder="所属公司" {...register("specs")} />
            )}
          ></Controller>

          <Controller
            name="supplier.name"
            control={control}
            render={({ field }) => (
              <Input placeholder="供应商" {...register("supplier")} />
            )}
          ></Controller>
        </div>
      </div>
      <div>
        <div>供应商信息</div>
        <div></div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <button disabled={isLoading}>保存</button>
      </div>
    </form>
  );
};

export default ItemForm;
