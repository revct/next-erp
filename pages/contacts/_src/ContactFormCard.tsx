import { Contact } from "@prisma/client";
import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

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

const ContactForm: FunctionComponent<IProps> = ({
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
        <input placeholder="姓名" {...register("name")} />
        <input placeholder="电话" {...register("phone")} />
        <input placeholder="所属公司" {...register("company")} />
        <input placeholder="邮箱" {...register("email")} />
        <input placeholder="街道地址" {...register("address")} />
        <input placeholder="城市" {...register("city")} />
        <input placeholder="省/州" {...register("state")} />
        <input placeholder="邮政编码" {...register("zipcode")} />
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <button>保存</button>
      </div>
    </form>
  );
};

export default ContactForm;
