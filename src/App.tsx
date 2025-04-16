
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { ActiveFilters } from './components/ActiveFilters';
import { JobStats } from './components/JobStats';
import { jobs } from './data/jobs';
import { Job, SearchFilters } from './types';
import { Toaster } from './components/ui/toaster';
import { useToast } from './hooks/use-toast';

function App() {
  const { toast } = useToast();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    location: '',
    jobType: [],
    experienceLevel: []
  });

  const applyFilters = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const filtered = jobs.filter(job => {
        // Search query filter
        const matchesQuery = !filters.query || 
          job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.query.toLowerCase()) ||
          job.description.toLowerCase().includes(filters.query.toLowerCase());
        
        // Location filter
        const matchesLocation = !filters.location || 
          job.location.toLowerCase().includes(filters.location.toLowerCase());
        
        // Job type filter
        const matchesJobType = filters.jobType.length === 0 || 
          filters.jobType.includes(job.type);
        
        // Experience level filter
        const matchesExperience = filters.experienceLevel.length === 0 || 
          filters.experienceLevel.includes(job.experience);
        
        return matchesQuery && matchesLocation && matchesJobType && matchesExperience;
      });
      
      setFilteredJobs(filtered);
      setIsLoading(false);
      
      toast({
        title: `${filtered.length} jobs found`,
        description: filtered.length > 0 
          ? "Showing jobs matching your search criteria" 
          : "Try adjusting your filters to see more results",
      });
    }, 800);
  };

  const handleSearch = () => {
    setFilters({ ...filters, query });
  };

  const handleRemoveFilter = (type: keyof SearchFilters, value?: string) => {
    if (type === 'location') {
      setFilters({ ...filters, location: '' });
    } else if (type === 'jobType' && value) {
      setFilters({ 
        ...filters, 
        jobType: filters.jobType.filter(t => t !== value) 
      });
    } else if (type === 'experienceLevel' && value) {
      setFilters({ 
        ...filters, 
        experienceLevel: filters.experienceLevel.filter(l => l !== value) 
      });
    }
  };

  // Apply filters when filters state changes
  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar 
            query={query} 
            setQuery={setQuery} 
            onSearch={handleSearch} 
          />
        </div>
        
        <div className="mb-8">
          <JobStats />
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FilterPanel 
              filters={filters} 
              setFilters={setFilters} 
              onApplyFilters={applyFilters} 
            />
          </div>
          
          <div className="lg:col-span-3">
            <ActiveFilters 
              filters={filters} 
              onRemoveFilter={handleRemoveFilter} 
            />
            
            <JobList 
              jobs={filteredJobs} 
              isLoading={isLoading} 
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} JobBoard. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
}

export default App;