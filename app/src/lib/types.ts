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