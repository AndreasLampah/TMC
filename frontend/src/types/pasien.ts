export interface Pasien {
    no_reg: string
    no_rawat: string
    tgl_registrasi:  string
    no_rkm_medis: string
    p_jawab: string
    kd_poli: string
}

export interface Pagination {
    page: number
    limit: number
    totalDate: number
    totalPages: number
}

export interface PasienResponse {
    success: boolean
    pagination: Pagination
    data: Pasien[]
}