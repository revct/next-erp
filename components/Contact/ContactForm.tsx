import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/react";
import { Contact } from "@prisma/client";
import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

type DefaultValueProps = Omit<Contact, "id">;

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
  const { handleSubmit, reset, register, formState } = useForm({
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
    console.log(data);
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
        <FormControl id="name">
          <FormLabel>姓名</FormLabel>
          <Input placeholder="请输入" {...register("name")} />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>电话</FormLabel>
          <Input placeholder="请输入" {...register("phone")} />
        </FormControl>
        <FormControl id="company">
          <FormLabel>所属公司</FormLabel>
          <Input placeholder="请输入" {...register("company")} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>邮箱</FormLabel>
          <Input placeholder="请输入" {...register("email")} />
        </FormControl>
        <FormControl id="address">
          <FormLabel>地址</FormLabel>
          <Input placeholder="请输入" {...register("address")} />
        </FormControl>
        <FormControl id="zipcode">
          <FormLabel>邮政编码</FormLabel>
          <Input placeholder="请输入" {...register("zipcode")} />
        </FormControl>
        <FormControl id="remarks" className="col-span-2">
          <FormLabel>备注</FormLabel>
          <Textarea {...register("remarks")} />
        </FormControl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <Button
          colorScheme="green"
          type="submit"
          isLoading={formState.isSubmitting}
        >
          保存
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
