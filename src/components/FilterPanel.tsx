
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { ExperienceLevel, JobType, SearchFilters } from "../types";
import { MapPin, X } from "lucide-react";

interface FilterPanelProps {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  onApplyFilters: () => void;
}

export function FilterPanel({ filters, setFilters, onApplyFilters }: FilterPanelProps) {
  const [location, setLocation] = useState(filters.location);

  const jobTypes: JobType[] = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
  const experienceLevels: ExperienceLevel[] = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'];

  const handleJobTypeChange = (type: JobType, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, jobType: [...filters.jobType, type] });
    } else {
      setFilters({ ...filters, jobType: filters.jobType.filter(t => t !== type) });
    }
  };

  const handleExperienceLevelChange = (level: ExperienceLevel, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, experienceLevel: [...filters.experienceLevel, level] });
    } else {
      setFilters({ ...filters, experienceLevel: filters.experienceLevel.filter(l => l !== level) });
    }
  };

  const handleApply = () => {
    setFilters({ ...filters, location });
    onApplyFilters();
  };

  const handleClearFilters = () => {
    setFilters({
      query: '',
      location: '',
      jobType: [],
      experienceLevel: []
    });
    setLocation('');
  };

  const hasActiveFilters = filters.location || filters.jobType.length > 0 || filters.experienceLevel.length > 0;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Filters</CardTitle>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearFilters}
            className="h-8 text-muted-foreground hover:text-foreground"
          >
            <X className="mr-1 h-4 w-4" />
            Clear all
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="location"
              placeholder="City, state, or remote"
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Job Type</Label>
          <div className="grid grid-cols-1 gap-2">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`job-type-${type}`} 
                  checked={filters.jobType.includes(type)}
                  onCheckedChange={(checked) => handleJobTypeChange(type, checked as boolean)}
                />
                <Label htmlFor={`job-type-${type}`} className="cursor-pointer">{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Experience Level</Label>
          <div className="grid grid-cols-1 gap-2">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox 
                  id={`exp-level-${level}`} 
                  checked={filters.experienceLevel.includes(level)}
                  onCheckedChange={(checked) => handleExperienceLevelChange(level, checked as boolean)}
                />
                <Label htmlFor={`exp-level-${level}`} className="cursor-pointer">{level}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full" onClick={handleApply}>
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}