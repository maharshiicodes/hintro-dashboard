export interface User{
    id : string,
    email : string,
    firstName : string,
    lastName : string,
    login_method : string,
    status : 'active' | 'inactive',
    is_hintro_admin : boolean,
    createdAt : string,
    updatedAt : string
}

export interface subscription {
    plan : string,
    billing_cycle : string,
    status : 'active' | 'inactive'
}

export interface Files {
    used : number,
    limit : number,
    percentage : number
}
export interface DashboardStats {
    user : User,
    subscription : subscription | null,
    usage : {
        kb_files : Files,
        vocab_terms : number,
        notes : number
    }
}
export interface CallStats {
    totalSessions : number,
    averageDuration : number,
    totalAIInteractions : number,
    lastSession : string[]
}
export interface Participant {
  name: string
  isUser: boolean
}

export interface CallSession {
  _id: string
  user_id: string
  status: 'ended' | 'force_ended' | 'active'
  client: string
  description: string
  started_at: string
  ended_at: string
  total_duration_seconds: number
  language: string[]
  auto_gen_ai_response: boolean
  save_transcript: boolean
  transcript: string | null
  transcript_final: boolean
  transcript_updated_at: string | null
  ai_interactions: number
  call_framework_id: string | null
  participants: Participant[]
  ended_reason: string
  createdAt: string
  updatedAt: string
}

export interface Pagination {
  page: number
  limit: number
  totalCount: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface CallSessionsResponse {
  callSessions: CallSession[]
  pagination: Pagination
}