
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Job } from "../types";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`h-full ${job.featured ? 'border-primary/50 bg-primary/5' : ''}`}>
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="h-16 w-16 rounded-md overflow-hidden">
            <img 
              src={job.logo} 
              alt={`${job.company} logo`} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription className="text-base font-medium">{job.company}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant={job.type === 'Remote' ? 'default' : 'outline'}>
                {job.type}
              </Badge>
              <Badge variant="outline">{job.experience}</Badge>
              {job.featured && <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays size={16} />
              <span>Posted on {new Date(job.postedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <p className="text-lg font-semibold">{job.salary}</p>
            <p className="line-clamp-3">{job.description}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}