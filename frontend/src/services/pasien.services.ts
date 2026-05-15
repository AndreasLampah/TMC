import axios from "axios"
import type { PasienResponse } from "../types/pasien"

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
})

export const getPasien = async (
    date: string,
    page = 1,
    limit = 50
): Promise<PasienResponse> => {

    const response = await api.get<PasienResponse>("/pasien",
        {
            params: {
                date,
                page,
                limit,
            },
        }
    )
    return response.data
}