import { Contact } from "@prisma/client";
import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

type DefaultValueProps = Contact;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DefaultValueProps;
  onSubmit?: (data: object) => void;
  loading?: boolean;
}

const defaultData = {
  address: "",
  city: "",
  company: "",
  country: "",
  email: "",
  name: "",
  phone: "",
  remarks: "",
  state: "",
  zipcode: "",
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
    await fetch("/api/contacts", {
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
    await fetch("/api/contacts", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="px-4 py-5 bg-white grid grid-cols-2 gap-6">
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input placeholder="姓名" {...field} />}
        ></Controller>

        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input placeholder="电话" {...field} />}
        ></Controller>

        <Controller
          name="company"
          control={control}
          render={({ field }) => <input placeholder="所属公司" {...field} />}
        ></Controller>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input placeholder="邮箱" type="email" {...field} />
          )}
        ></Controller>

        <Controller
          name="address"
          control={control}
          render={({ field }) => <input placeholder="街道地址" {...field} />}
        ></Controller>

        <Controller
          name="city"
          control={control}
          render={({ field }) => <input placeholder="城市" {...field} />}
        ></Controller>

        <Controller
          name="state"
          control={control}
          render={({ field }) => <input placeholder="省/州" {...field} />}
        ></Controller>

        <Controller
          name="zipcode"
          control={control}
          render={({ field }) => <input placeholder="邮政编码" {...field} />}
        ></Controller>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <button>保存</button>
      </div>
    </form>
  );
};

export default PersonalInfoCard;
