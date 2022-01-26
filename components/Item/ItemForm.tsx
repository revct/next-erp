import { cloneDeep, isFunction } from "lodash-es";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createItem, updateItem } from "~/data/items";
import SupplierModal from "../Modal/SupplierModal";

type DefaultValueProps = Omit<any, "id">;

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
  const { handleSubmit, reset, register, formState, setValue } = useForm({
    defaultValues: defaultData,
  });
  useEffect(() => {
    if (!loading) {
      reset(cloneDeep(defaultValues));
    }
  }, [loading, reset, defaultValues]);

  const handleSave = async (data: any) => {
    if (data.id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }

    router.back();
  };

  const handleUpdate = async (data: any) => {
    return updateItem(data);
  };

  const handleCreate = async (data = {}) => {
    return createItem(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
      <div className="bg-white ">
        <div className="p-4">物料信息</div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">品名</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="请输入"
              {...register("name")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">料号</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="请输入"
              {...register("code")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">规格</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="请输入"
              {...register("specs")}
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="p-4">供应商信息</div>
        <div className="p-4">
          <div className="flex justify-center">
            <SupplierModal>
              <button className="btn" type="button">
                选择供应商
              </button>
            </SupplierModal>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right">
        <button
          className={`btn btn-primary ${
            formState.isSubmitting ? "loading" : ""
          }`}
          type="submit"
        >
          保存
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
