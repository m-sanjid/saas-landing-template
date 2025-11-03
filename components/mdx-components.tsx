import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'

// Custom components to be used in MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn('mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn('font-medium text-primary underline underline-offset-4', className)}
        {...props}
      />
    ),
    ...components,
  }
}
