import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RECENT_ALERTS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function AllAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">All Alerts</CardTitle>
        <CardDescription>
          Live alerts triggered by the AI detection system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location</TableHead>
              <TableHead>Disease</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RECENT_ALERTS.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell className="font-medium">{alert.location}</TableCell>
                <TableCell>{alert.disease}</TableCell>
                <TableCell>
                  <Badge
                    variant="destructive"
                    className={cn(
                      alert.severity === 'High' && 'bg-orange-500',
                      alert.severity === 'Medium' && 'bg-yellow-500',
                      alert.severity === 'Low' && 'bg-blue-500',
                      'text-white'
                    )}
                  >
                    {alert.severity}
                  </Badge>
                </TableCell>
                <TableCell>{alert.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Generate Insights</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
