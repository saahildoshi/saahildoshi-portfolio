import NextImage, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export function Image({ className, ...props }: ImageProps) {
  return <NextImage className={cn('rounded-none', className)} {...props} />;
}
