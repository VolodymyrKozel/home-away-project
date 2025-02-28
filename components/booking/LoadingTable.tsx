import { Skeleton } from "../ui/skeleton";

interface LoadingTableProps {
  rows?: number;
}

const LoadingTable = ({ rows }: LoadingTableProps) => {
  const tableRows = Array.from({ length: rows || 5 }, (_, i) => {
    return (
      <div className="mt-4" key={i}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });
  return (
    <div className="mt-16">
      <Skeleton className="w-1/3 h-8 rounded" />
      {tableRows}
    </div>
  );
};
export default LoadingTable;
