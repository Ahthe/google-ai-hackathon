import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-zinc-500',
        className
      )}
      {...props}
    >
      AI chatbot built with{' '}
      <ExternalLink href="https://cloud.google.com/vertex-ai">
        Google Gemini API
      </ExternalLink>
      , <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
      <ExternalLink href="https://github.com/vercel/ai">
        and Vercel AI SDK
      </ExternalLink>
      .
    </p>
  )
}
