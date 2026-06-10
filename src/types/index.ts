export type Role =
    | 'admin'
    | 'procurement_head'
    | 'department_head'
    | 'finance_officer'
    | 'vendor'
    | 'auditor'

export interface Profile {
    id: string
    email: string
    full_name: string
    role: Role
    department_id: string | null
    company_id: string | null
    avatar_url: string | null
    created_at: string
}