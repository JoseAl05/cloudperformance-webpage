'use client'
import { AlertCircle } from 'lucide-react'

import {
  Alert,
  AlertDescription
} from '@/components/ui/alert'

export function AlertComponent() {
  return (
    <div className='flex justify-center'>
        <Alert variant='destructive' className='bg-slate-200'>
        <AlertCircle className='h-4 w-4' />
        <AlertDescription className='text-xl font-medium'>
            Página web en Desarrollo.
        </AlertDescription>
        </Alert>
    </div>
  )
}
