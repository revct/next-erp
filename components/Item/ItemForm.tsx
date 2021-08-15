import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createItem, updateItem } from "@/data/items";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Item } from ".prisma/client";

type DefaultValueProps = Omit<Item, "id">;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DefaultValueProps;
  onSubmit?: (data: object) => void;
  loading?: boolean;
}

const defaultData = {
  name: "",
  code: "",
  specs: "",
} as DefaultValueProps;

const ItemForm: FunctionComponent<IProps> = ({
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
    return createItem(data);
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
    return updateItem(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
      <div className="bg-white ">
        <div className="p-4">物料信息</div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <FormControl id="name">
            <FormLabel>品名</FormLabel>
            <Input placeholder="请输入" {...register("name")} />
          </FormControl>

          <FormControl id="code">
            <FormLabel>料号</FormLabel>
            <Input placeholder="请输入" {...register("code")} />
          </FormControl>

          <FormControl id="specs">
            <FormLabel>规格</FormLabel>
            <Input placeholder="请输入" {...register("specs")} />
          </FormControl>

          <FormControl id="supplierId">
            <FormLabel>供应商</FormLabel>
            <Input placeholder="请输入" {...register("supplierId")} />
          </FormControl>
        </div>
      </div>
      <div className="bg-white">
        <div className="p-4">供应商信息</div>
        <div className="p-4"></div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <Button
          isLoading={formState.isSubmitting}
          colorScheme="green"
          type="submit"
        >
          保存
        </Button>
      </div>
    </form>
  );
};

export default ItemForm;
