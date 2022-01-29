import { usePagination } from "@mantine/hooks";
import { PaginationParams } from "@mantine/hooks/lib/use-pagination/use-pagination";

interface PaginationProps extends PaginationParams {
  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const pagination = usePagination(props);
  return (
    <div className={`btn-group flex justify-center ${props.className ?? ""}`}>
      {pagination.range.map((item, index) => (
        <button
          className={[
            "btn",
            item === "dots" ? "btn-disabled" : "",
            item === pagination.active ? "btn-active" : "",
          ].join(" ")}
          key={index}
          onClick={() => {
            if (item !== "dots") {
              pagination.setPage(item);
            }
          }}
        >
          {item === "dots" ? <span>...</span> : item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
