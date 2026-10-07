import axios from "axios"

export const deductCredits = async (userId, agent) => {
    try {
        const { data } = await axios.post(
            `${process.env.AUTH_SERVICE}/deduct-credits`,
            { userId, agent },
            {
                headers: {
                    "x-internal-service-secret": process.env.INTERNAL_SERVICE_SECRET
                }
            }
        )

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}