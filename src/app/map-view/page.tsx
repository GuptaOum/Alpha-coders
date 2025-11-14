
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { RECENT_ALERTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Mock locations for hotspots, as we don't have real coordinates.
const hotspotLocations: { [key: string]: { top: string; left: string } } = {
  'West Suburb': { top: '40%', left: '20%' },
  'North District': { top: '25%', left: '50%' },
  'East Bay': { top: '50%', left: '80%' },
  'Central City': { top: '60%', left: '35%' },
  'South Valley': { top: '75%', left: '60%' },
};

export default function MapViewPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'map-placeholder');
  return (
    <Card className="w-full h-[calc(100vh-10rem)]">
      <CardHeader>
        <CardTitle className="font-headline">Global Hotspots</CardTitle>
        <CardDescription>
          AI-predicted high-risk areas for disease outbreaks. These hotspot
          marks are based on disease risk levels.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full pb-6">
        <TooltipProvider>
          <div className="relative w-full h-full rounded-lg overflow-hidden border">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            {RECENT_ALERTS.map((alert) => {
              const position = hotspotLocations[alert.location];
              if (!position) return null;

              return (
                <Tooltip key={alert.id}>
                  <TooltipTrigger asChild>
                    <div
                      className="absolute w-4 h-4 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        top: position.top,
                        left: position.left,
                        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <div
                        className={cn(
                          'w-full h-full rounded-full',
                          alert.severity === 'High' && 'bg-red-500',
                          alert.severity === 'Medium' && 'bg-yellow-500',
                          alert.severity === 'Low' && 'bg-blue-500'
                        )}
                      ></div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-bold">{alert.location}</p>
                    <p>
                      {alert.disease} -{' '}
                      <span
                        className={cn(
                          'font-semibold',
                          alert.severity === 'High' && 'text-red-500',
                          alert.severity === 'Medium' && 'text-yellow-500',
                          alert.severity === 'Low' && 'text-blue-500'
                        )}
                      >
                        {alert.severity} Risk
                      </span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
