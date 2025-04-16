
import { X } from "lucide-react";
import { Badge } from "./ui/badge";
import { SearchFilters } from "../types";

interface ActiveFiltersProps {
  filters: SearchFilters;
  onRemoveFilter: (type: keyof SearchFilters, value?: string) => void;
}

export function ActiveFilters({ filters, onRemoveFilter }: ActiveFiltersProps) {
  const hasActiveFilters = 
    filters.location || 
    filters.jobType.length > 0 || 
    filters.experienceLevel.length > 0;

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.location && (
        <Badge variant="secondary" className="px-3 py-1 text-sm">
          Location: {filters.location}
          <button 
            onClick={() => onRemoveFilter('location')} 
            className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove location filter</span>
          </button>
        </Badge>
      )}

      {filters.jobType.map(type => (
        <Badge key={type} variant="secondary" className="px-3 py-1 text-sm">
          {type}
          <button 
            onClick={() => onRemoveFilter('jobType', type)} 
            className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove {type} filter</span>
          </button>
        </Badge>
      ))}

      {filters.experienceLevel.map(level => (
        <Badge key={level} variant="secondary" className="px-3 py-1 text-sm">
          {level}
          <button 
            onClick={() => onRemoveFilter('experienceLevel', level)} 
            className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove {level} filter</span>
          </button>
        </Badge>
      ))}
    </div>
  );
}