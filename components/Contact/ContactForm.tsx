import { cloneDeep, isFunction } from "lodash-es";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

type DefaultValueProps = Omit<any, "id">;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DefaultValueProps;
  onSubmit?: (data: object) => void;
  loading?: boolean;
}

const defaultData = {
  name: "",
  phone: "",
  remarks: "",
} as DefaultValueProps;

const ContactForm: FunctionComponent<IProps> = ({
  defaultValues,
  onSubmit,
  loading,
}) => {
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
    if (data.id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }
    if (isFunction(onSubmit)) {
      onSubmit(data);
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
      <div className="px-4 py-5 grid grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">姓名</span>
          </label>
          <input
            className="input input-bordered"
            placeholder="请输入"
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">电话</span>
          </label>
          <input
            className="input input-bordered"
            placeholder="请输入"
            {...register("phone")}
          />
        </div>
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text">备注</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            {...register("remarks")}
          />
        </div>
      </div>
      <div className="px-4 py-3 text-right">
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

export default ContactForm;
