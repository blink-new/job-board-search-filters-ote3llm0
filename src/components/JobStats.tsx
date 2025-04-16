
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, MapPin, Users } from "lucide-react";

export function JobStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex items-center gap-4 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="rounded-full bg-primary/10 p-3">
          <BriefcaseBusiness className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Jobs</p>
          <h3 className="text-2xl font-bold">1,234</h3>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center gap-4 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="rounded-full bg-primary/10 p-3">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Companies</p>
          <h3 className="text-2xl font-bold">567</h3>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex items-center gap-4 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="rounded-full bg-primary/10 p-3">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Locations</p>
          <h3 className="text-2xl font-bold">89</h3>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex items-center gap-4 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="rounded-full bg-primary/10 p-3">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Job Seekers</p>
          <h3 className="text-2xl font-bold">10,543</h3>
        </div>
      </motion.div>
    </div>
  );
}