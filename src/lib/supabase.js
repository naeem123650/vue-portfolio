import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://pratorqeaaoellvjdsru.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYXRvcnFlYWFvZWxsdmpkc3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzMjg4NTgsImV4cCI6MjAxODkwNDg1OH0.uAmgmAFsyqLPKtd9DvIFl86vwUGE6EZxgKWL1BwieGU'
)